"use client";

import React from "react";
import Link from "next/link";
import { ConnectKitButton } from "connectkit";
import { DESKTOP_NAV_LINKS } from "@/assets/data";
import { Profile, Search } from "@/assets/icons";
import "./index.scss";

import { truncateWalletAddress } from "@/utils";

import {
	useWeb3Modal,
	useWeb3ModalState,
	useWeb3ModalAccount,
} from "@web3modal/ethers/react";

// import { useWeb3Modal } from '@web3modal/ethers/react'

function renderConnectButton() {
	const { open, close } = useWeb3Modal();
	// const { selectedNetworkId, open: stateOpen } = useWeb3ModalState();
	const { address, chainId, isConnected } = useWeb3ModalAccount();

	// console.log({ selectedNetworkId, stateOpen });

	console.log({
		address,
		chainId,
		isConnected,
	});

	return (
		// <>
		// 	<li
		// 		onClick={() => open()}
		// 		id="login"
		// 	>
		// 		{/* {isConnected ? (
		// 			<span>
		// 				<i>
		// 					<Profile />
		// 				</i>
		// 				{truncatedAddress}
		// 			</span>
		// 		) : (
		// 			"Login"
		// 		)} */}
		// 		Login
		// 	</li>
		// </>

		// <>
		// 	<w3m-button />
		// </>

		<>
			<li
				onClick={() => open()}
				id="login"
			>
				{isConnected ? (
					<span>
						<i>
							<Profile />
						</i>
						{truncateWalletAddress(address!)}
					</span>
				) : (
					"Login"
				)}
			</li>
		</>
	);
}

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

				{/* <ConnectKitButton.Custom>
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
				</ConnectKitButton.Custom> */}

				{renderConnectButton()}
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
