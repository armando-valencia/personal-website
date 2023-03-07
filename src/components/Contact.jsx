import React, { useState } from "react";

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
		<div>
			<div className="flex mt-20 mx-2 mb-2 md:m-2">
				<h1 className="text-3xl">03. Contact</h1>
			</div>
			<form
				action={import.meta.env.VITE_CONTACT_FORM_ENDPOINT}
				method="POST"
				encType="multipart/form-data"
				className="pb-14"
				onSubmit={handleSubmitForm}
			>
				<div className="grid md:grid-cols-2 gap-4 w-full py-4">
					<div className="flex flex-col">
						<label className="uppercase text-sm py-2 required">
							Name
						</label>
						<input
							className="border rounded-lg p-2 flex border-tertiary text-primary bg-tertiary"
							type="text"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="flex flex-col">
						<label className="uppercase text-sm py-2">Email</label>
						<input
							className="border rounded-lg p-2 flex border-tertiary text-primary bg-tertiary"
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
				</div>

				<div className="flex flex-col py-2">
					<label className="uppercase text-sm py-2">Subject</label>
					<input
						className="border-2 rounded-lg p-2 flex border-tertiary text-primary bg-tertiary"
						type="text"
						name="subject"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						required
					/>
				</div>
				<div className="flex flex-col py-2">
					<label className="uppercase text-sm py-2">Message</label>
					<textarea
						className="border-2 rounded-lg p-2 flex border-tertiary text-primary bg-tertiary"
						rows="5"
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
				</div>
				<div className="flex justify-center">
					<button className="bg-secondary text-primary mt-4 w-1/2 md:w-1/3 p-3 rounded-full">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
