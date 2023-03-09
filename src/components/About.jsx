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
		<div className="py-6 md:pb-24 md:pt-20">
			<div className="flex mt-20 mx-2 mb-2 md:m-2">
				<h1 className="text-xl">01. About</h1>
			</div>
			<div className="block text-base">
				<div className="text-tertiary">
					<p className="px-4 pt-6 pb-4">
						In 2021, I graduated with my Bachelor's in Management
						Information Systems and a fresh, high-driven curiosity
						for creating scalable software solutions.
					</p>
					<p className="p-4">
						Now, I find myself extremely eager when presented a new
						opportunity to implement solutions -- especially modern
						frontend development.
					</p>
				</div>
				<div className="flex justify-center mt-4 p-2 text-quarternary text-lg">
					Tools and languages I have experience with:
				</div>
				<div className="grid grid-cols-3 gap-1 justify-items-center list-none text-tertiary">
					{skills.map((skill) => (
						<li key={skill} className="text-base">
							{skill}
						</li>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
