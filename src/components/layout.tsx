import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
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
  footNote,
  highlight,
} from "./layout.module.css";

import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

type LayoutProps = {
  pageTitle: string;
  children: PageProps["children"];
};

const icons = [
  {
    src: FaLinkedin,
    url: "https://www.linkedin.com/in/israeldmatos",
  },
  {
    src: FaFacebook,
    url: "https://www.facebook.com/israel.matos.963",
  },
  {
    src: FaInstagram,
    url: "https://www.instagram.com/izzydoesreels/",
  },
  {
    src: FaGithub,
    url: "https://www.github.com/izzydoesit",
  },
];

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <a href="#home" className={chevronLinkWrapper}>
          <FaChevronUp className={chevron} />
        </a>
        <div className={socialLinkRow}>
          {icons.map((icon, index) => {
            const Icon = icon.src;

            return (
              <a
                className={socialLink}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={socialLinkIcon} size={40} />
              </a>
            );
          })}
        </div>

        <div className="info-box">
          <div className="footNote">
            ISRAEL D. MATOS
            <span className="highlight">©2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
