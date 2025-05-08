import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { BsStopwatch } from "@react-icons/all-files/bs/BsStopwatch";
import { BiDevices } from "@react-icons/all-files/bi/BiDevices";
import { FaRegThumbsUp } from "@react-icons/all-files/fa/FaRegThumbsUp";
import { FaMagic } from "@react-icons/all-files/fa/FaMagic";
import { motion } from "framer-motion";

const bulletItems = [
	{
		image: BsStopwatch,
		label: "Fast",
		tagLine: "Optimal load times are my highest priority",
	},
	{
		image: BiDevices,
		label: "Responsive",
		tagLine: "My layouts work on any device, big or small",
	},
	{
		image: FaRegThumbsUp,
		label: "Intuitive",
		tagLine: "I design for the simplest and easiest use possible",
	},
	{
		image: FaMagic,
		label: "Dynamic",
		tagLine: "I love adding a little magic to make the page sparkle!",
	},
];

const skillData = [
	{ name: "JavaScript", level: 95 },
	{ name: "React", level: 92 },
	{ name: "TypeScript", level: 90 },
	{ name: "React Native", level: 85 },
	{ name: "AWS", level: 80 },
	{ name: "HTML5", level: 95 },
	{ name: "CSS/SCSS", level: 90 },
	{ name: "Test-Driven Development", level: 88 },
	{ name: "GoLang", level: 70 },
	{ name: "Python", level: 80 },
	{ name: "SQL", level: 85 },
];

const About: React.FC = () => {
	return (
		<section id="about" className="bg-[#1f232b] text-white px-6 py-20">
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				<h2 className="text-4xl font-bold">About</h2>
			</motion.div>

			<motion.div
				className="grid grid-cols-2 gap-x-12 gap-y-12 w-full max-w-5xl mx-auto justify-center px-4"
				initial="hidden"
				whileInView="visible"
				variants={{
					hidden: {},
					visible: {
						transition: {
							staggerChildren: 0.5,
						},
					},
				}}
				viewport={{ once: true }}
			>
				{bulletItems.map((item, index) => {
					const Icon = item.image;
					return (
						<motion.div
							key={index}
							className="aspect-square bg-[#2b2f3a] rounded-xl flex flex-col items-center justify-center text-center p-4 shadow-md"
							variants={{
								hidden: { opacity: 0, rotateY: 90 },
								visible: { opacity: 1, rotateY: 0 },
							}}
							transition={{ duration: 0.6 }}
						>
							<Icon size={55} className="text-pink-400 mb-4" />
							<h3 className="text-xl font-semibold mb-2">{item.label}</h3>
							<p className="text-sm opacity-80">{item.tagLine}</p>
						</motion.div>
					);
				})}
			</motion.div>

			<div className="flex flex-col lg:flex-row gap-10 mt-20 items-stretch">
				{/* Bio Section */}
				<div className="w-full lg:w-1/2 flex flex-col justify-between">
					<motion.div
						className="rounded-full shadow-lg border border-highlight-color overflow-hidden w-80 h-80 my-auto mx-auto"
						initial={{ scale: 0.1, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<StaticImage
							alt="author profile pic"
							src="../images/profilePic.jpeg"
							className="w-full h-full object-cover"
						/>
					</motion.div>

					<div className="mt-6 text-center">
						<motion.h3
							className="text-2xl font-semibold mb-2"
							initial={{ x: -30, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							Who is this guy?
						</motion.h3>
						<p className="text-base text-gray-300 leading-relaxed">
							I currently work at{" "}
							<a
								href="https://www.linkedin.com/company/nofugi/about"
								target="_blank"
								rel="noopener noreferrer"
								className="text-highlight-color font-bold hover:underline"
							>
								Nofugi
							</a>{" "}
							building custom IT solutions for small businesses.
							<br />
							I'm passionate about crafting smooth UIs and magical experiences.
							<br />
							<a href="#contact" className="text-highlight-color">
								Let’s make something special together...
							</a>
						</p>
					</div>
				</div>

				{/* Skills Section */}
				<div className="w-full lg:w-1/2 flex flex-col justify-center">
					{skillData.map((skill, idx) => (
						<motion.div
							key={idx}
							className="mb-4"
							initial={{ width: 0, opacity: 0 }}
							whileInView={{ width: `${skill.level}%`, opacity: 1 }}
							transition={{ duration: 1, delay: idx * 0.1 }}
							viewport={{ once: true }}
						>
							<div className="text-sm mb-1 font-semibold">{skill.name}</div>
							<div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
								<div
									className="h-3 bg-pink-500 rounded-full"
									style={{ width: `${skill.level}%` }}
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
