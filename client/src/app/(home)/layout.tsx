import { Web3Modal } from "@/hooks";
// import { ReduxProvider } from "@/redux";
import "@/styles/main.scss";
import { ReactNode } from "react";

export const metadata = {
	title: "WagmiClub",
	description: "The club with the Magic Badge",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		// <ReduxProvider>
		<html lang="en">
			<body className={`container`}>
				<Web3Modal>
					<section>{children}</section>
				</Web3Modal>
			</body>
		</html>
		// </ReduxProvider>
	);
}
