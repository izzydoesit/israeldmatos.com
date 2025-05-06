import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";


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
