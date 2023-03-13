import React from "react";

const About = () => {
	const skills = [
		"React",
		"JavaScript",
		"Node",
		"Express",
		"Python",
		"Rust",
		"Tailwind",
		"Git",
		"SQL",
	];

	return (
		<div className="section-container">
			<div className="section-container-heading">
				<h1 className="heading">01. About</h1>
			</div>
			<div className="block text-lg md:text-2xl">
				<div className="flex justify-center">
					<img
						src="\picture.jpg"
						alt="Picture of myself"
						className="rounded h-44 md:h-60 px-3 pb-3 mb-4"
					/>
				</div>
				<div className="text-quarternary">
					<p className="px-4 pt-6 pb-4">
						In 2021, I graduated with my Bachelor's in Management
						Information Systems and a fresh, high-driven curiosity
						for creating scalable software solutions.
					</p>
				</div>
				<div className="flex justify-center mt-4 p-2 text-tertiary text-3xl">
					Skills:
				</div>
				<div className="grid grid-cols-3 gap-1 justify-items-center list-none text-secondary">
					{skills.map((skill) => (
						<li key={skill} className="">
							{skill}
						</li>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
