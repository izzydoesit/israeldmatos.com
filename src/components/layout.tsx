import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import Footer from "./Footer"


type LayoutProps = {
  pageTitle: string;
  children: PageProps["children"];
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <main className="flex-grow px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
