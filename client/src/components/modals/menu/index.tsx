"use client";

import { DESKTOP_NAV_LINKS } from "@/assets/data";
import { Search } from "@/assets/icons";
import { truncateWalletAddress } from "@/utils";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import Link from "next/link";
import "./index.scss";

function renderConnectButton() {
	const { open } = useWeb3Modal();
	const { address, chainId, isConnected } = useWeb3ModalAccount();

	return (
		<>
			<li
				onClick={() => open()}
				id="login"
			>
				{isConnected ? (
					<>
						<span>{truncateWalletAddress(address!)}</span>

						<img
							src="/defi_pfp.jpg"
							alt=""
						/>
					</>
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
