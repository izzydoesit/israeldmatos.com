import * as React from "react";
import { hero, name, content, wrapper } from "../styles/hero.module.css";
import { Snowfall } from "react-snowfall";

const Hero: React.FC = () => {
  return (
    <section id="home" className={hero}>
      <div className={wrapper}>
        <div className={content}>
          <h1>Hello, I am <span className={name}>Israel D. Matos 👋</span></h1>
          <p>Software Engineer. Polyglot. Builder of cool stuff.</p>
          <a href="#about" className="mt-4">
            <button className="bg-highlight-color hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Learn More...</button>
          </a>
        </div>
        <Snowfall snowflakeCount={500} />
      </div>
    </section>
  );
};

export default Hero;
