import React from 'react';
import Chevron from 'react-icons/lib/fa/angle-double-up';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import Facebook from 'react-icons/lib/fa/facebook';
import Instagram from 'react-icons/lib/fa/instagram';
import Github from 'react-icons/lib/fa/github';

const icons = [
    { src: LinkedIn, url: 'https://www.linkedin.com/in/israeldmatos' },
    { src: Facebook, url: 'https://www.facebook.com/israel.matos.963' },
    { src: Instagram, url: 'https://www.instagram.com/izzytrips/' },
    { src: Github, url: 'https://www.github.com/izzydoesit' },
  ]

const Footer: React.FC = () => {
    return (
        <footer id="footer">
          <a href="#home" className="chevron-link-wrapper">
            <Chevron className="chevron" />
          </a>
  
          <div className="flex row icon-wrap">
            {icons.map((icon, index) =>
              <IconLink
                key={index}
                index={index}
                icon={icon.src}
                url={icon.url}
              />
            )}
          </div>
  
          <div className="info-box">
            <div className="foot-note">
              ISRAEL D. MATOS
              <span className="highlight">©2017</span>
            </div>
          </div>
        </footer>
      )
}