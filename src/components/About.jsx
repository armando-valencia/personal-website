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
			<div className="block text-lg md:text-xl">
				<div className="flex justify-center items-center">
					<img
						src="\picture.jpg"
						alt="Picture of myself"
						className="rounded-full h-48 md:h-60 p-3 mt-6 md:mt-0"
					/>
				</div>
				<div className="text-quarternary">
					<p className="px-4 pt-6 pb-4">
						In 2021, I graduated with my B.S. in Management
						Information Systems. I have always been an enthusiastic
						student that enjoys learning and solving problems.
						Struggling through my first semester of programming
						classes can support that.
					</p>
					<p className="px-4 pt-6 pb-4">
						A few of my hobbies consist of sports, trying out a new
						recipe, and going on hikes or walks.
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
