import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import Footer from "./Footer"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  footer,
  chevronLinkWrapper,
  chevron,
  socialLinkRow,
  socialLink,
  socialLinkIcon,
  icon,
  footNote,
  highlight,
} from "../styles/layout.module.css";

type LayoutProps = {
  pageTitle: string;
  children: PageProps["children"];
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className={container}>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
