import * as React from "react";
import { Snowfall } from "react-snowfall";
import { motion } from "framer-motion";
import { scrollToSection } from "../util/animation";

const Hero: React.FC = () => {
	return (
		<section
			id="home"
			className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-[#1a1c24] to-[#2b2f3a] overflow-hidden"
		>
			<Snowfall snowflakeCount={500} color="white" />

			<div className="relative z-10 p-6 max-w-3xl">
				<motion.h1
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl font-extrabold text-white mb-4"
				>
					Hello, I am{" "}
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
						className="text-pink-500"
					>
						Israel D. Matos 👋
					</motion.span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2 }}
					className="text-xl text-gray-300 mb-6"
				>
					Software Engineer. Polyglot. Builder of cool stuff.
				</motion.p>

				<motion.button
					onClick={() => scrollToSection("#about")}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.95 }}
					className="bg-highlight-color hover:bg-pink-700 text-xl text-white font-bold py-6 px-9 mt-6 rounded transition duration-200 ease-in-out shadow-lg"
				>
					Learn More...
				</motion.button>
			</div>

			{/* Optional: a subtle animated SVG background layer */}
			<div className="absolute inset-0 opacity-10">
				{/* Drop in a background SVG or animated blob if you like */}
			</div>
		</section>
	);
};

export default Hero;
