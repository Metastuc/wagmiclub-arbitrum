"use client";

import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import Link from "next/link";
import {
	Actions,
	Bio,
	ProfileBadges,
	ProfileMedals,
	TrustScores,
} from "@/components";
import { useFetch } from "@/hooks";
import { X } from "@/assets/icons";
import "./page.scss";

interface Medal {
	id: number;
	value: {
		image: string;
		verified: boolean;
		name: string;
		headImg: string;
		created: string;
		transacId: string;
		desc: string;
		time: {
			start: string;
			end: string;
		};
		validator: string;
		rating: number;
	};
}

interface Badge {
	id: number;
	value: {
		verified: boolean;
		name: string;
		created: string;
		transacId: string;
		desc: string;
		time: {
			start: string;
			end: string;
		};
		validator: string;
		rating: number;
	};
}

interface Bio {
	name: string;
	username: string;
	bio: string;
	profession: string;
	followers: number;
	following: number;
	discord: string;
	x: string;
	telegram: string;
	website: string;
}

interface UserProfileData {
	bio: Bio;
	badges: Badge[];
	medals: Medal[];
}

const Profile = () => {
	const group = "profile";

	const { address } = useAccount();

	const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;

	const URL = `${baseApiUrl}getUserProfileAddress/${address}`;

	const { data, loading, error } = useFetch({ url: URL });
	const [profile, setProfile] = useState<UserProfileData | null>(null);

	useEffect(() => {
		if (!data || error) return;
		setProfile(data as any);
	}, [data, error]);

	console.log({ profile });

	return (
		<section className={`${group}`}>
			<section className={`${group}__wrapper`}>
				{/* Conditional rendering based on loading state */}
				{loading && <p>Loading profile...</p>}

				{/* Conditional rendering based on error state */}
				{error && <p>Error loading data: {error.message}</p>}

				{/* Render other components only if data is available and no error occurred */}
				{profile && !error && (
					<>
						<Actions group={`${group}__actions`} />

						<Bio
							group={`${group}__bio`}
							{...profile.bio}
						/>

						<ProfileBadges
							group={`${group}__badges`}
							badges={profile.badges}
						/>

						<TrustScores group={`${group}__trustscores`} />

						<ProfileMedals
							group={`${group}__medals`}
							{...profile.medals}
						/>

						<section className={`${group}__socials`}>
							{profile.bio.x && (
								<Link href={`https://x.com/${profile.bio.x}`}>
									<X />
								</Link>
							)}
							{profile.bio.x && (
								<Link href={`https://x.com/${profile.bio.x}`}>
									<X />
								</Link>
							)}
							{profile.bio.x && (
								<Link href={`https://x.com/${profile.bio.x}`}>
									<X />
								</Link>
							)}
							{profile.bio.x && (
								<Link href={`https://x.com/${profile.bio.x}`}>
									<X />
								</Link>
							)}
						</section>
					</>
				)}
			</section>
		</section>
	);
};

export default Profile;
