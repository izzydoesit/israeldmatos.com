import * as React from "react";
import { Snowfall } from "react-snowfall";
import { motion } from "framer-motion";
import { scrollToSection } from "../util/animation";
// import WaveHaikei from "../images/wave-haikei.svg";

const Hero: React.FC = () => {
	return (
		<section
			id="home"
			className="relative w-full h-screen flex items-center justify-center text-center bg-gradient-to-b from-[#1a1c24] to-[#2b2f3a] overflow-hidden"
		>
			{/* SVG Animated Blob Background */}

			{/* <img
				src={WaveHaikei}
				alt="Wave Haikei"
				className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
			/> */}

			<svg
				className="absolute -top-48 -left-64 w-[1200px] h-[1200px] opacity-10 animate-spin-slow z-0"
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="#38bdf8"
					d="M45.5,-57.6C60.1,-50.3,73.6,-37.7,74.6,-24.5C75.6,-11.4,64.2,2.4,58.3,19.2C52.4,36.1,52.1,55.9,42.3,65.7C32.5,75.4,13.2,75.1,-1.6,73.1C-16.5,71.1,-33,67.4,-43.4,57.7C-53.8,48,-58.2,32.2,-64.3,15.7C-70.4,-0.8,-78.3,-18,-71.2,-29.3C-64.1,-40.7,-42,-46.1,-24.4,-52.3C-6.9,-58.5,6.1,-65.6,20.5,-67.9C34.8,-70.1,51,-67,45.5,-57.6Z"
					transform="translate(100 100)"
				/>
			</svg>

			{/* Snowfall Overlay */}
			<Snowfall snowflakeCount={500} color="#ffffff" style={{ zIndex: 5 }} />

			{/* Main Content */}
			<div className="relative z-10 text-center p-6 max-w-4xl">
				<motion.h1
					className="text-5xl sm:text-6xl font-extrabold text-white mb-4"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Hello, I am{" "}
					<motion.span
						className="text-pink-500"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					>
						Israel D. Matos 👋
					</motion.span>
				</motion.h1>

				<motion.p
					className="text-xl sm:text-2xl text-gray-300 mt-8 mb-8"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9, delay: 1.2 }}
				>
					Software Engineer. Polyglot. Builder of cool stuff.
				</motion.p>

				<motion.button
					onClick={() => scrollToSection("#about")}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.95 }}
					className="bg-highlight-color text-white hover:bg-blue-500 hover:text-pink-600 hover:text-border-black text-xl font-bold py-6 px-9 mt-6 rounded-2xl transition duration-300 ease-in-out shadow-lg"
				>
					Learn More...
				</motion.button>
			</div>

			{/* Optional: a subtle animated SVG background layer */}
			<div className="absolute inset-0 opacity-10">
				<motion.div></motion.div>
				{/* Drop in a background SVG or animated blob if you like */}
			</div>
		</section>
	);
};

export default Hero;
