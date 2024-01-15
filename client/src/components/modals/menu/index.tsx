"use client";

import React from "react";
import Link from "next/link";
import { ConnectKitButton } from "connectkit";
import { DESKTOP_NAV_LINKS } from "@/assets/data";
import { Profile, Search } from "@/assets/icons";
import "./index.scss";

const MenuModal = ({ onClose }: { onClose: () => void }) => {
	return (
		<div className="content__wrapper">
			<ul className="navigation">
				{DESKTOP_NAV_LINKS.map((item) => {
					const {
						id,
						value: { title, to },
					} = item;

					return (
						<li
							key={id}
							onClick={onClose}
						>
							<Link href={to}>{title}</Link>
						</li>
					);
				})}

				<ConnectKitButton.Custom>
					{({ isConnected, show, truncatedAddress }) => (
						<li
							onClick={() => {
								show!();
								onClose();
							}}
							id="login"
						>
							{isConnected ? (
								<span>
									<i>
										<Profile />
									</i>
									{truncatedAddress}
								</span>
							) : (
								"Login"
							)}
						</li>
					)}
				</ConnectKitButton.Custom>
			</ul>

			{/* Search input */}
			<div className="search">
				<input
					type="text"
					placeholder="search"
				/>
				<span>
					<Search />
				</span>
			</div>
		</div>
	);
};

export { MenuModal };
