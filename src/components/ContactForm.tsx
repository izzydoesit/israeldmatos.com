import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_ID!);

	if (state.succeeded) {
		return (
			<div className="max-w-xl mx-auto px-4 py-16 text-white text-center">
				<h2 className="text-3xl font-bold mb-4">Message Sent 🎉</h2>
				<p className="text-lg">
					Thanks for reaching out — I’ll get back to you soon.
				</p>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-[#2b2f3a] p-8 mb-10 rounded-lg shadow-md text-white"
		>
			<label className="block mb-4">
				Name
				<input
					type="text"
					name="name"
					placeholder="John Doe"
					required
					className="mt-1 p-2 w-full rounded bg-gray-800 border border-gray-700"
				/>
			</label>

			<label className="block mb-4">
				Email
				<input
					type="email"
					name="email"
					placeholder="youremail@domain.com"
					required
					className="mt-1 p-2 w-full rounded bg-gray-800 border border-gray-700"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
					className="text-red-500 text-sm mt-1"
				/>
			</label>

			<label className="block mb-4">
				Phone (optional)
				<input
					type="tel"
					name="phone"
					placeholder="(123) 456-7890"
					pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
					className="mt-1 p-2 w-full rounded bg-gray-800 border border-gray-700"
				/>
			</label>

			<label className="block mb-6">
				Message
				<textarea
					name="message"
					placeholder="Your message here..."
					required
					rows={5}
					className="mt-1 p-2 w-full rounded bg-gray-800 border border-gray-700"
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
					className="text-red-500 text-sm mt-1"
				/>
			</label>

			<button
				type="submit"
				disabled={state.submitting}
				className="bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{state.submitting ? "Sending..." : "Send Message"}
			</button>
		</form>
	);
};

export default ContactForm;
