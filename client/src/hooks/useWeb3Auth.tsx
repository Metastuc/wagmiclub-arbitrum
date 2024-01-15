"use client";

import React, { FC, ReactNode } from "react";
import { polygon, polygonMumbai } from "viem/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { useShutTheFuckUpAboutENS } from "./useShutTheFuckUpAboutENS";
import { WagmiConfig, createConfig, Chain } from "wagmi";

interface Props {
	children: ReactNode;
}

const viction = {
	id: 89,
	name: 'Viction Testnet',
	network: 'viction testnet',
	nativeCurrency: {
	  decimals: 18,
	  name: 'Viction',
	  symbol: 'VIC',
	},
	rpcUrls: {
	  public: { http: ['https://rpc-testnet.viction.xyz'] },
	  default: { http: ['https://rpc-testnet.viction.xyz'] },
	},
	blockExplorers: {
	  etherscan: { name: 'TomoScan', url: 'https://testnet.tomoscan.io' },
	  default: { name: 'TomoScan', url: 'https://testnet.tomoscan.io' },
	},
}

const chains = [viction];

const Web3Auth: FC<Props> = ({ children }) => {
	useShutTheFuckUpAboutENS();

	const config = createConfig(
		getDefaultConfig({
			alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
			walletConnectProjectId:
				process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
			appName: "WAGMI Club",
			chains,
		}),
	);

	return (
		<WagmiConfig config={config}>
			<ConnectKitProvider>{children}</ConnectKitProvider>
		</WagmiConfig>
	);
};

export { Web3Auth };
