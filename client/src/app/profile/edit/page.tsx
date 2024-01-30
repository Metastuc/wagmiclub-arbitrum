"use client";

import { Back } from "@/assets/icons";
import { EditTabs } from "@/components/";
import { useScrollReset, useTabSwitcher } from "@/hooks";
import { FormField as EditForms } from "@/views";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import "./page.scss";

const Edit = () => {
	useScrollReset();
	const router = useRouter();

	useEffect(() => {
		const nav = document.querySelector("nav");
		nav?.setAttribute("style", "display: none;");

		return () => {
			nav?.removeAttribute("style");
		};
	}, []);

	const { activeTab, handleTabClick, tabIsActive } =
		useTabSwitcher("personal");

	const { isConnected } = useWeb3ModalAccount();

	useLayoutEffect(() => {
		if (!isConnected) {
			router.replace("/profile");
		}
	});

	return (
		<>
			<section className="edit">
				<div className="edit__title-bar">
					<button
						onClick={() => {
							router.back();
							const nav = document.querySelector("nav");
							nav?.setAttribute("style", "display: block;");
						}}
						className="edit__back"
					>
						<Back />
					</button>
					<span>edit profile</span>
					<span>
						<img
							src="/defi_pfp.jpg"
							alt="profile_pic"
						/>
					</span>
				</div>

				<EditTabs
					group="edit"
					onTabChange={handleTabClick}
					tabIsActive={tabIsActive}
				/>

				<EditForms activeTab={activeTab} />
			</section>
		</>
	);
};

export default Edit;
