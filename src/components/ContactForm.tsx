import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC = () => {
	const [status, setStatus] = useState("idle");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("loading");

		const formData = new FormData(e.currentTarget);

		const response = await fetch(process.env.GATSBY_FORMSPREE_URL, {
			method: "POST",
			headers: { Accept: "application/json" },
			body: formData,
		});

		if (response.ok) {
			setStatus("success");
			e.currentTarget.reset();
		} else {
			setStatus("error");
		}
	};

	return (
		<section className="max-w-xl mx-auto px-4 py-16">
			<h2 className="text-3xl text-white font-bold mb-8 text-center">
				Get in Touch
			</h2>
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
		</section>
	);
};

export default ContactForm;
