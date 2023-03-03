import React from "react";
import Skills from "./Skills";

const About = () => {
	return (
		<div>
			<div className="flex m-3">
				<h1 className="text-3xl">01. About</h1>
			</div>
			<div className="block">
				<div className="flex justify-center">
					<img
						src="\picture.jpg"
						alt=""
						className="rounded-full h-60 p-3"
					/>
				</div>
				<div className="text-tertiary p-2">
					Hey! My name is{" "}
					<span className="text-secondary">Armando Valencia</span> and
					I'm a software engineer based out of Birmingham, Alabama.
					I'm 23 years old and a graduate of the University of
					Alabama, with a Bachelor's degree in Management Information
					Systems.
					<br />
					<br />
				</div>
				<div className="flex justify-center">
					Below are tools and languages I have experience with:
				</div>
				<Skills />
				<div className="text-tertiary p-2">
					<br />
					<br />
				</div>
			</div>
		</div>
	);
};

export default About;
