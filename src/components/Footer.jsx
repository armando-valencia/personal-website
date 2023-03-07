import React from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const Footer = () => {
	return (
		<div className="flex justify-center px-6 py-10 mt-8 gap-3 md:gap-4 border-t border-secondary">
			<a href={import.meta.env.VITE_GITHUB_URL} target="_blank">
				<GrGithub size={30} />
			</a>
			<a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">
				<GrLinkedin size={30} />
			</a>
		</div>
	);
};

export default Footer;
