import React from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const Footer = () => {
	return (
		<div className="flex justify-center p-6 gap-2">
			<GrGithub /> <GrLinkedin />
		</div>
	);
};

export default Footer;
