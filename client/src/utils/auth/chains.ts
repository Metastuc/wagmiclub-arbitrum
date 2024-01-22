import { defineChain } from "viem";

export const victionTestnet = defineChain({
	id: 89,
	name: "Viction Testnet",
	network: "viction testnet",
	nativeCurrency: {
		decimals: 18,
		name: "Viction",
		symbol: "VIC",
	},
	rpcUrls: {
		default: {
			http: ["https://rpc-testnet.viction.xyz"],
			webSocket: ["wss://ws-testnet.viction.xyz"],
		},
		public: {
			http: ["https://rpc-testnet.viction.xyz"],
			webSocket: ["wss://ws-testnet.viction.xyz"],
		},
	},
	blockExplorers: {
		default: { name: "Explorer", url: "https://testnet.vicscan.xyz" },
	},
});

export const victionMainnet = defineChain({
	id: 88,
	name: "Viction Mainnet",
	network: "viction mainnet",
	nativeCurrency: {
		decimals: 18,
		name: "Viction",
		symbol: "VIC",
	},
	rpcUrls: {
		default: {
			http: ["https://rpc.viction.xyz"],
			webSocket: ["wss://ws.viction.xyz"],
		},
		public: {
			http: ["https://rpc.viction.xyz"],
			webSocket: ["wss://ws.viction.xyz"],
		},
	},
	blockExplorers: {
		default: { name: "Explorer", url: "https://vicscan.xyz" },
	},
});
