import "@/styles/app.scss";
import "ui/styles/globals.scss";
import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "Web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
