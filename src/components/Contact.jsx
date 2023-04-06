import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmitForm = () => {
		setTimeout(() => {
			setName("");
			setEmail("");
			setSubject("");
			setMessage("");
		}, 2500);
	};

	return (
		<div className="section-container">
			<div className="section-container__heading">
				<h1 className="heading">03. Contact</h1>
			</div>
			<div className="md:flex flex-col text-quarternary justify-center items-center text-xl md:text-2xl py-3">
				<div className="px-4">
					If you want to talk opportunities or give any feedback,
					please complete the form below.
				</div>
				<form
					action={import.meta.env.VITE_CONTACT_FORM}
					method="POST"
					encType="multipart/form-data"
					className="pb-14 md:w-3/4 max-w-3xl"
					onSubmit={handleSubmitForm}
				>
					<div className="grid md:grid-cols-2 gap-4 w-full py-4">
						<div className="flex flex-col">
							<label className="text-lg py-2 required">
								Name
							</label>
							<input
								className="input-field_contact-form"
								type="text"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className="flex flex-col">
							<label className="text-lg py-2">Email</label>
							<input
								className="input-field_contact-form"
								type="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
					</div>

					<div className="flex flex-col py-2">
						<label className="text-lg py-2">Subject</label>
						<input
							className="input-field_contact-form"
							type="text"
							name="subject"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							required
						/>
					</div>
					<div className="flex flex-col py-2">
						<label className="text-lg py-2">Message</label>
						<textarea
							className="input-field_contact-form"
							rows="5"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						></textarea>
					</div>
					<div className="flex justify-center">
						<motion.button
							className="bg-secondary text-quarternary hover:text-secondary hover:bg-quarternary mt-4 w-1/2 md:w-1/3 p-3 rounded-full"
							whileHover={{
								scale: 1.1,
								boxShadow: "0px 0px 8px rgb(255, 255, 255)",
							}}
						>
							Submit
						</motion.button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
