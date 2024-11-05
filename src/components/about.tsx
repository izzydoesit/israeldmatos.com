import * as React from "react";
import { about } from "./about.module.css";
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
      <div>
        <p>Hi, this is my about section!</p>
      </div>
    </section>
  );
};

export default About;
