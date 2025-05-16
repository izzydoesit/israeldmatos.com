import React from "react";
import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { scrollToSection } from "../util/animation";
import { socialLinkIcon } from "../styles/layout.module.css";

const icons = [
	{ Icon: FaLinkedin, url: "https://www.linkedin.com/in/izzy-matos" },
	{ Icon: FaFacebook, url: "https://www.facebook.com/israel.matos.963" },
	{ Icon: FaInstagram, url: "https://www.instagram.com/izzydoesreels/" },
	{ Icon: FaGithub, url: "https://www.github.com/izzydoesit" },
];

const Footer: React.FC = () => {
	return (
		<footer id="footer" className="bg-gray-800 py-12 text-center relative">
			<button
				onClick={() => scrollToSection("#home")}
				className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-highlight-color p-2 rounded-full hover:bg-gray-600 transition"
			>
				<FaChevronUp className="text-white" />
			</button>

			<div className="flex justify-center space-x-6 my-4">
				{icons.map(({ Icon, url }, index) => {
					return (
						<a
							key={index}
							className="hover:scale-150 transition-transform"
							href={url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon className={socialLinkIcon} size={40} />
						</a>
					);
				})}
			</div>

			<div className="text-center">
				<div className="text-sm tracking-wide mt-10">
					ISRAEL D. MATOS
					<span className="text-highlight-color pl-1">©2025</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
