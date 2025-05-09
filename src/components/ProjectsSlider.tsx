import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsSlider = ({ projects }) => {
	const [index, setIndex] = useState(0);
	const total = projects.length;

	const handleNext = () => setIndex((prev) => (prev + 1) % total);
	const handlePrev = () => setIndex((prev) => (prev - 1 + total) % total);

	return (
		<div className="w-full max-w-4xl mx-auto text-white py-16 px-4">
			<div className="relative">
				<AnimatePresence mode="wait">
					<motion.div
						key={index}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5 }}
					>
						<ProjectCard {...projects[index].frontmatter} />
					</motion.div>
				</AnimatePresence>

				<div className="flex justify-between mt-4">
					<button
						onClick={handlePrev}
						className="text-white bg-pink-600 px-4 py-2 rounded hover:bg-pink-400"
					>
						← Prev
					</button>
					<button
						onClick={handleNext}
						className="text-white bg-pink-600 px-4 py-2 rounded hover:bg-pink-400"
					>
						Next →
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectsSlider;
