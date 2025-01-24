import { Suspense } from "react";

export default function MultiLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Suspense>{children}</Suspense>;
}
