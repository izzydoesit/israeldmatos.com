import * as React from "react";
import { hero, name, content } from "./hero.module.css";
import { Snowfall } from "react-snowfall";

const Hero: React.FC = () => {
  return (
    <section className={hero}>
      <div>
        <div className={content}>
          Hello, I am <span className={name}>Israel D. Matos</span> I am a
          software engineer and this is my HERO section.
        </div>
        <Snowfall snowflakeCount={500} />
      </div>
    </section>
  );
};

export default Hero;
