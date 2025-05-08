import React from 'react';
import Chevron from 'react-icons/lib/fa/angle-double-up';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import Facebook from 'react-icons/lib/fa/facebook';
import Instagram from 'react-icons/lib/fa/instagram';
import Github from 'react-icons/lib/fa/github';
import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { footer } from "../styles/layout.module.css";
import { chevronLinkWrapper, socialLink, socialLinkIcon, socialLinkRow, chevron, infoBox, footNote, highlight } from '../styles/layout.module.css';

const icons = [
    { src: FaLinkedin, url: 'https://www.linkedin.com/in/izzy-matos' },
    { src: FaFacebook, url: 'https://www.facebook.com/israel.matos.963' },
    { src: FaInstagram, url: 'https://www.instagram.com/izzydoesreels/' },
    { src: FaGithub, url: 'https://www.github.com/izzydoesit' },
  ]

const Footer: React.FC = () => {
    return (
        <footer id="footer" className={footer}>
            <a href="#footer" className={chevronLinkWrapper}>
                <FaChevronUp className={chevron} />
            </a>
  
            <div className={socialLinkRow}>
                {icons.map((icon, index) => {
                    const Icon = icon.src;
    
                    return (
                        <a
                        key={index}
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
                
            <div className={infoBox}>
                <div className={footNote}>
                    ISRAEL D. MATOS
                    <span className={highlight}>©2025</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;