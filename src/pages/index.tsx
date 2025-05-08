import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import "../styles/index.module.css"


const IndexPage: React.FC<PageProps> = ({}: PageProps) => {
  return (
    <Layout pageTitle="Israel D. Matos' Portfolio">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Israel D. Matos' Portfolio</title>;
