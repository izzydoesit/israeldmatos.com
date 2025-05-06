import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  about,
  container,
  title,
  bulletsWrapper,
  bulletRow,
  bulletCard,
  skillsWrapper,
  bioWrapper,
  bioImage,
  bioText,
  bioLabel,
  bioDescription,
  skillBarsWrapper,
  skillBar,
} from "../styles/about.module.css";
import { BsStopwatch } from "@react-icons/all-files/bs/BsStopwatch";
import { BiDevices } from "@react-icons/all-files/bi/BiDevices";
import { FaRegThumbsUp } from "@react-icons/all-files/fa/FaRegThumbsUp";
import { FaMagic } from "@react-icons/all-files/fa/FaMagic";

const About: React.FC = () => {
  const firstRowIcons = [
    {
      image: BsStopwatch,
      label: "Fast",
      tagLine: "Optimal load times are my highest priority",
      delay: 250,
    },
    {
      image: BiDevices,
      label: "Responsive",
      tagLine: "My layouts will work on any device, big or small",
      delay: 350,
    },
  ];
  const secondRowIcons = [
    {
      image: FaRegThumbsUp,
      label: "Intuitive",
      tagLine: "I design for the simplest and easiest use posible",
      delay: 450,
    },
    {
      image: FaMagic,
      label: "Dynamic",
      tagLine: "I love adding a little magic to make that page sparkle!",
      delay: 550,
    },
  ];
  return (
    <section className={about}>
      <div className={container}>
        <div className={title}>
          <h2>About</h2>
        </div>
        <div className={bulletsWrapper}>
          <div className={bulletRow}>
            {firstRowIcons.map((item, index) => {
              const Icon = item.image;
              return (
                <div key={index} className={bulletCard}>
                  <Icon size={55} />
                  <h3>{item.label}</h3>
                  <p>{item.tagLine}</p>
                </div>
              );
            })}
          </div>
          <div className={bulletRow}>
            {secondRowIcons.map((item, index) => {
              const Icon = item.image;
              return (
                <div key={index} className={bulletCard}>
                  <Icon size={55} />
                  <h3>{item.label}</h3>
                  <p>{item.tagLine}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={skillsWrapper}>
          <div className={bioWrapper}>
            <div className={bioImage}>
              <StaticImage
                alt="author profile pic"
                src="../images/profilePic.jpeg"
              />
            </div>
            <div className={bioText}>
              <div className={bioLabel}>
                <h3>Who is this guy?</h3>
              </div>
              <div className={bioDescription}>
                I currently work at{" "}
                <a
                  href="https://www.linkedin.com/company/nofugi/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nofugi
                </a>{" "}
                building custom IT solutions for small businesses.
                <br />
                I have a passion for building awe-inspiring UI effects and
                buttery smooth user experiences.
                <br />
                <a href="#contact">Let's make something special together...</a>
              </div>
            </div>
          </div>

          <div className={skillBarsWrapper}>
            <div className={skillBar}>
              <h3>JavaScript</h3>
            </div>
            <div className={skillBar}>
              <h3>React</h3>
            </div>
            <div className={skillBar}>
              <h3>TypeScript</h3>
            </div>
            <div className={skillBar}>
              <h3>React Native</h3>
            </div>
            <div className={skillBar}>
              <h3>AWS</h3>
            </div>
            <div className={skillBar}>
              <h3>HTML5</h3>
            </div>
            <div className={skillBar}>
              <h3>CSS/SCSS</h3>
            </div>
            <div className={skillBar}>
              <h3>Test-Driven Development</h3>
            </div>
            <div className={skillBar}>
              <h3>GoLang</h3>
            </div>
            <div className={skillBar}>
              <h3>Python</h3>
            </div>
            <div className={skillBar}>
              <h3>SQL</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
