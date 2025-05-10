import * as React from "react";
import type { PageProps } from "gatsby";
import Footer from "./Footer";

type LayoutProps = {
	pageTitle: string;
	children: PageProps["children"];
};

const Layout: React.FC<LayoutProps> = ({
	pageTitle,
	children,
}: LayoutProps) => {
	return (
		<div className="min-h-screen flex flex-col bg-gray-900 text-white">
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
