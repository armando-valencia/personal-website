import React, { useState } from "react";
import { FiAlignRight, FiX } from "react-icons/fi";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiBriefcase } from "react-icons/bi";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {
		y: -400,
	},
	visible: {
		y: 0,
		transition: {
			delay: 0.3,
			type: "tween",
			duration: 0.4,
		},
	},
};

const pathVariants = {
	hidden: { pathLength: 0 },
	visible: {
		pathLength: 1,
		transition: {
			duration: 1.5,
			// repeat: Infinity,
			// repeatType: "mirror",
			// repeatDelay: 1,
			ease: "easeInOut",
			delay: 1,
		},
	},
};

const Nav = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	const pages = [
		{ name: "Home", icon: <AiOutlineHome /> },
		{ name: "About", icon: <BsPerson /> },
		{ name: "Experience", icon: <BiBriefcase /> },
		{ name: "Contact", icon: <AiOutlinePhone /> },
	];

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="sticky top-0 w-full md:w-full z-50 bg-primary/5 text-quarternary drop-shadow-xl"
			key="nav"
		>
			<div className="md:block hidden bg-primary text-primary text-lg shadow-xl">
				<div className="flex justify-end items-center py-4 px-16">
					<nav className="md:block bg-transparent text-primary">
						<ul className="px-3 py-1 flex items-center">
							{pages.map((page, idx) => (
								<>
									<a
										href={`${
											page.name == "Home"
												? "#"
												: "#" + page.name.toLowerCase()
										}`}
										className="cursor-pointer hover:text-secondary text-quarternary text-2xl bg-transparent p-5"
										key={page.name + idx + "-nav"}
									>
										{page.name}
									</a>
									{idx !== pages.length - 1 && (
										<p
											className="text-white"
											key={page.name + idx + "-nav_pipe"}
										>
											|
										</p>
									)}
								</>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</motion.div>
	);
};

export default Nav;
