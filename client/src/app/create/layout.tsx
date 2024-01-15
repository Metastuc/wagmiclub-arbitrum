import { ReactNode } from "react";
import { SecondaryNav } from "@/components";
import { BreakpointCheck, Web3Auth } from "@/hooks";
import "@/styles/main.scss";

export const metadata = {
	title: "Claim Profile - WagmiClub",
	description:
		"Medals are claimed and collected onchain as an icon of reputation within a specific blockchain",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="container">
				<Web3Auth>
					<BreakpointCheck>
						<SecondaryNav />
						<section>{children}</section>
					</BreakpointCheck>
				</Web3Auth>
			</body>
		</html>
	);
}
