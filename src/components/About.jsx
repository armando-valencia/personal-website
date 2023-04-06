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
		"GraphQL",
	];

	return (
		<div className="section-container">
			<div className="section-container__heading">
				<h1 className="heading">01. About</h1>
			</div>
			<div className="block text-lg md:text-xl">
				<div className="flex justify-center">
					<img
						src="\picture.jpg"
						alt="Picture of myself"
						className="rounded h-44 md:h-60 px-3 p-3 my-4"
					/>
				</div>
				<div className="text-quarternary">
					<p className="px-4 pt-6 pb-4">
						My name is Armando Valencia. I'm a 23 year old software
						developer who is ambitious to deliver innovative
						software solutions.
					</p>
					<p className="px-4 pt-6 pb-4">
						In 2021, I graduated with my Bachelor's in Management
						Information Systems from the University of Alabama. I
						have always been an enthusiastic student that enjoys
						learning and solving problems. Struggling through my
						first semester of programming classes can support that.
					</p>
				</div>
				<div className="flex justify-center mt-4 p-2 text-secondary text-2xl">
					Skills:
				</div>
				<div className="grid grid-cols-2 gap-1 justify-items-center list-none text-quarternary">
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
