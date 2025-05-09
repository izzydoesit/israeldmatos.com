import * as React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import { motion } from "framer-motion";
import { flipInX } from "react-animations";
import styled, { keyframes } from "styled-components";

const flipAnimation = keyframes`${flipInX}`;

const FlipCard = styled(motion.div)`
	animation: 0.6s ${flipAnimation};
`;

type ProjectCardProps = {
	title: string;
	description: string;
	stack: string[];
	image: {
		childImageSharp: {
			gatsbyImageData: IGatsbyImageData;
		};
	};
	github: string;
	live: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	stack,
	image,
	github,
	live,
}) => {
	return (
		<FlipCard
			className="bg-[#2b2f3a] rounded-xl shadow-lg overflow-hidden p-6 text-white max-w-2xl mx-auto mb-12 hover:scale-105 transition-transform duration-200"
			initial={{ opacity: 0, rotateY: -180 }}
			whileInView={{ opacity: 1, rotateY: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			<div className="mb-4 rounded-lg overflow-hidden">
				{image?.childImageSharp?.gatsbyImageData ? (
					<GatsbyImage
						image={image}
						alt={`${title} preview`}
						className="w-full h-60 object-cover rounded-xl mb-4"
					/>
				) : (
					<div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
						Image not available
					</div>
				)}
			</div>

			<h3 className="text-2xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-300 mb-4">{description}</p>

			<div className="flex flex-wrap gap-2 mb-4">
				{stack.map((tech, idx) => (
					<span
						key={idx}
						className="bg-pink-600 text-white text-xs px-3 py-1 rounded-full"
					>
						{tech}
					</span>
				))}
			</div>

			<div className="flex gap-4 items-center">
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-white cursor-pointer hover:text-pink-400 transition"
				>
					<FaGithub size={20} />
					Code
				</a>
				<a
					href={live}
					target="_blank"
					rel="noopener noreferrer"
					className="text-white hover:text-pink-400 flex items-center gap-1 transition"
				>
					<FaExternalLinkAlt size={18} />
					Live
				</a>
			</div>
		</FlipCard>
	);
};

export default ProjectCard;
