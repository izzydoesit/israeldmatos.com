import * as React from "react";
import { hero, name, content, wrapper } from "../styles/hero.module.css";
import { Snowfall } from "react-snowfall";

const Hero: React.FC = () => {
  return (
    <section className={hero}>
      <div className={wrapper}>
        <div className={content}>
          <h1>Hello, I am <span className={name}>Israel D. Matos 👋</span></h1>
          <p>Software Engineer. Polyglot. Builder of cool stuff.</p>
        </div>
        <Snowfall snowflakeCount={500} />
      </div>
    </section>
  );
};

export default Hero;
