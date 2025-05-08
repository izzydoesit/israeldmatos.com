import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC = () => {
	const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_ID!);

	if (state.succeeded) {
		return (
			<section className="max-w-xl mx-auto px-4 py-16 text-white text-center">
				<h2 className="text-3xl font-bold mb-4">Message Sent 🎉</h2>
				<p className="text-lg">
					Thanks for reaching out — I’ll get back to you soon.
				</p>
			</section>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-[#2b2f3a] p-8 rounded-lg shadow-md text-white"
		>
			<label className="block mb-4">
				Name
				<input
					type="text"
					name="name"
					required
					className="mt-1 p-2 w-full rounded bg-gray-800 border border-gray-700"
				/>
			</label>
			<label className="block mb-4">
				Email
				<input
					type="email"
					name="email"
					required
					className="mt-1 p-2 w-full rounded bg-gray-800 border border-gray-700"
				/>
			</label>
			<label className="block mb-4">
				Phone (optional)
				<input
					type="tel"
					name="phone"
					className="mt-1 p-2 w-full rounded bg-gray-800 border border-gray-700"
				/>
			</label>
			<label className="block mb-6">
				Message
				<textarea
					name="message"
					required
					rows={5}
					className="mt-1 p-2 w-full rounded bg-gray-800 border border-gray-700"
				/>
			</label>
			<button
				type="submit"
				className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition"
			>
				Send Message
			</button>
			{status === "success" && (
				<p className="text-green-400 mt-4">Thanks! I'll be in touch soon.</p>
			)}
			{status === "error" && (
				<p className="text-red-400 mt-4">Oops! Something went wrong.</p>
			)}
		</form>
	);
};

export default ContactForm;
