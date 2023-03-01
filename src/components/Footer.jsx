import React from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const Footer = () => {
	const githubUrl = "https://github.com/thearmandovalencia/portfolio";
	const linkedinUrl = "https://www.linkedin.com/in/armandovalencia1/";

	return (
		<div className="flex justify-center p-6 mt-8 gap-2 border-t border-secondary">
			<a href={githubUrl} target="_blank">
				<GrGithub size={30} />
			</a>
			<a href={linkedinUrl} target="_blank">
				<GrLinkedin size={30} />
			</a>
		</div>
	);
};

export default Footer;
