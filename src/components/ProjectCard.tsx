import * as React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import { motion } from "framer-motion";

type ProjectCardProps = {
	title: string;
	description: string;
	stack: string[];
	image: IGatsbyImageData;
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
		<motion.div
			className="bg-[#2b2f3a] rounded-xl shadow-lg overflow-hidden p-6 text-white max-w-2xl mx-auto mb-12"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			<div className="mb-4 rounded-lg overflow-hidden">
				<GatsbyImage
					image={getImage(image)}
					alt={`${title} preview`}
					className="w-full h-60 object-cover rounded-md mb-4"
				/>
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
					className="text-white hover:text-pink-400 flex items-center gap-1 transition"
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
		</motion.div>
	);
};

export default ProjectCard;
