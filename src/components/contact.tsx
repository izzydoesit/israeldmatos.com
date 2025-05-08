import * as React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<section
			id="contact"
			className="flex flex-col max-w-xl mx-auto px-6 py-16 border-purple-500"
		>
			{/* Title */}
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				<h2 className="text-4xl text-white font-bold mb-8 text-center">
					Contact Me
				</h2>
			</motion.div>

			{/* Form */}
			<div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
