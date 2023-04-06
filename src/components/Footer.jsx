import React from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const Footer = () => {
	return (
		<div className="flex justify-center px-6 py-10 mt-8 gap-3 md:gap-4 border-t border-secondary w-full">
			<a
				href={import.meta.env.VITE_GITHUB_URL}
				target="_blank"
				className="hover:text-quarternary"
			>
				<GrGithub size={30} />
			</a>
			<a
				href={import.meta.env.VITE_LINKEDIN_URL}
				target="_blank"
				className="hover:text-quarternary"
			>
				<GrLinkedin size={30} />
			</a>
		</div>
	);
};

export default Footer;
