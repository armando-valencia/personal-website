import React from "react";

const About = () => {
	return (
		<div className="pb-6 md:pb-24">
			<div className="flex mt-20 mx-2 mb-2 md:m-2">
				<h1 className="text-3xl">01. About</h1>
			</div>
			<div className="block">
				<div className="text-tertiary">
					<p className="px-4 pt-6 pb-4">
						After my first semester of programming classes in
						college, I did not think software development was for
						me. However, due to my indesicive nature, I stuck with
						it for another couple of semesters.
					</p>
					<p className="p-4">
						In 2021, I graduated with my Bachelor's in Management
						Information Systems and a new, driven curiosity for
						creating scalable software solutions.
					</p>
					<p className="p-4">
						Now, I find myself extremely eager when presented a new
						opportunity to implement solutions -- especially modern
						frontend development.
					</p>
				</div>
				<div className="flex justify-center mt-4 p-2 md:text-lg">
					Tools and languages I have experience with consist of:
				</div>
				<div className="grid grid-cols-3 gap-1 justify-items-center list-none text-tertiary">
					<li>React</li>
					<li>JavaScript</li>
					<li>Node.js</li>
					<li>Python</li>
					<li>Rust</li>
					<li>Tailwind</li>
					<li>Git</li>
					<li>MongoDB</li>
					<li>SQL</li>
				</div>
			</div>
		</div>
	);
};

export default About;
