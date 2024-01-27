import { ReactNode } from "react";
import { BreakpointCheck, Web3Modal } from "@/hooks";
import { SecondaryNav } from "@/components";
import "@/styles/main.scss";
// import { ReduxProvider } from "@/redux";

export const metadata = {
	title: "Profile - Explore",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		// <ReduxProvider>
		<html lang="en">
			<body className="container">
				<Web3Modal>
					<BreakpointCheck>
						<SecondaryNav />
						<section>{children}</section>
					</BreakpointCheck>
				</Web3Modal>
			</body>
		</html>
		// </ReduxProvider>
	);
}
