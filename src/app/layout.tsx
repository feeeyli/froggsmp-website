import type { Metadata } from "next";
// import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Noto_Color_Emoji } from "next/font/google";
import localFont from "next/font/local";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "react-photo-view/dist/react-photo-view.css";
import "../styles/react-grid-layout.css";
import "./globals.css";
import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";

dayjs.locale("pt-br");

const notoColorEmoji = Noto_Color_Emoji({
	variable: "--font-emoji",
	subsets: ["emoji"],
	weight: "400",
});

const minecraft = localFont({
	src: [
		{
			path: "./CraftMine.ttf",
			weight: "400",
		},
		{
			path: "./CraftMine-Bold.ttf",
			weight: "700",
		},
	],
	variable: "--font-minecraft",
});

export const metadata: Metadata = {
	title: "FroggSMP",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className="scroll-smooth scroll-pt-[4.5rem]"
			suppressHydrationWarning
		>
			<head>
				{/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" async /> */}
			</head>
			<body
				className={`${notoColorEmoji.variable} ${minecraft.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NuqsAdapter>
						<QueryProvider>{children}</QueryProvider>
					</NuqsAdapter>
				</ThemeProvider>
			</body>
		</html>
	);
}
