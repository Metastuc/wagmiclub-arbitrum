import { ReactNode } from "react";
import { Web3Auth } from "@/hooks";
import "@/styles/main.scss";

export const metadata = {
	title: "WagmiClub",
	description: "The club with the Magic Badge",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`container`}>
				<Web3Auth>
					<section>{children}</section>
				</Web3Auth>
			</body>
		</html>
	);
}
