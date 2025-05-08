import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

type ProjectNode = {
	id: string;
	frontmatter: {
		title: string;
		description: string;
		stack: string[];
		github: string;
		live: string;
		image: {
			childImageSharp: {
				gatsbyImageData: IGatsbyImageData;
			};
		};
	};
};

type ProjectsQueryData = {
	allMarkdownRemark: {
		nodes: ProjectNode[];
	};
};

const Projects: React.FC = () => {
	const data = useStaticQuery<ProjectsQueryData>(graphql`
		query ProjectsQuery {
			allMarkdownRemark {
				nodes {
					id
					frontmatter {
						title
						description
						stack
						github
						live
						image {
							childImageSharp {
								gatsbyImageData(
									width: 800
									placeholder: BLURRED
									formats: [AUTO, WEBP, AVIF]
								)
							}
						}
					}
				}
			}
		}
	`);

	return (
		<section className="flex flex-col border-orange-500 pt-16 pb-16 px-4 bg-[#1a1c24] mx-w-4xl mx-auto border-t-2 border-b-2">
			{/* Title */}
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				<h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
			</motion.div>

			{/* Project Cards */}
			<div className="grid gap-8 md:grid-cols-2">
				{data.allMarkdownRemark.nodes.map(({ id, frontmatter }) => (
					<ProjectCard
						key={id}
						title={frontmatter.title}
						description={frontmatter.description}
						stack={frontmatter.stack}
						github={frontmatter.github}
						live={frontmatter.live}
						image={frontmatter.image.childImageSharp.gatsbyImageData}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
