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
			repeat: Infinity,
			repeatType: "mirror",
			repeatDelay: 1,
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
			className="sticky top-0 w-full z-50 bg-secondary text-quarternary"
		>
			{nav === true ? (
				<div className="p-3 bg-secondary flex justify-between items-center z-[99] sm:hidden">
					<a href="#" onClick={handleNav}>
						<div className="flex items-center gap-3 uppercase">
							<svg
								width="3em"
								height="3em"
								viewBox="0 0 336 391"
								xmlns="http://www.w3.org/2000/svg"
								className="sm:hidden"
							>
								<path
									stroke="#F0A500"
									strokeWidth={12}
									d="M176 0L336 390.5L272.5 358.5L176 106.5L64.5 358.5L0 390.5L176 0Z"
									fill="#F0A500"
								/>
							</svg>
							<span className="font-semibold text-lg">
								Armando Valencia
							</span>
						</div>
					</a>
					<FiX onClick={handleNav} size={40} />
				</div>
			) : (
				<div className="p-3 bg-secondary flex justify-between shadow-xl items-center z-[99] sm:hidden">
					<a href="#">
						<div className="flex items-center gap-3 uppercase">
							<svg
								width="3em"
								height="3em"
								viewBox="0 0 336 391"
								xmlns="http://www.w3.org/2000/svg"
								className="sm:hidden"
							>
								<path
									stroke="#F0A500"
									strokeWidth={12}
									d="M176 0L336 390.5L272.5 358.5L176 106.5L64.5 358.5L0 390.5L176 0Z"
									fill="#F0A500"
								/>
							</svg>
							<span className="font-semibold text-lg">
								Armando Valencia
							</span>
						</div>
					</a>

					<FiAlignRight onClick={handleNav} size={40} />
				</div>
			)}

			{nav && (
				<nav className="fixed w-full h-screen bg-black/80 flex flex-col justify-center items-center z-20">
					{pages.map((page, idx) => (
						<a
							href={`#${
								page.name == "Home"
									? ""
									: page.name.toLowerCase()
							}`}
							className="mobile_nav-link"
							onClick={handleNav}
							key={idx}
						>
							{page.icon}&nbsp;{page.name}
						</a>
					))}
				</nav>
			)}
			<div className="sm:block hidden bg-secondary text-primary text-md shadow-lg">
				<div className="flex justify-between items-center py-3 px-10">
					<a href="#">
						<motion.svg
							width="2.5em"
							height="2.5em"
							viewBox="0 0 336 391"
							xmlns="http://www.w3.org/2000/svg"
							className="sm:block hidden"
						>
							<motion.path
								variants={pathVariants}
								stroke="#FFFFFF"
								strokeWidth={12}
								d="M176 0L336 390.5L272.5 358.5L176 106.5L64.5 358.5L0 390.5L176 0Z"
								fill="none"
							/>
						</motion.svg>
					</a>

					<nav className="sm:block hidden bg-transparent text-primary">
						<ul className="px-3 py-2">
							{pages.map((page, idx) => (
								<a
									href={`#${page.name.toLowerCase()}`}
									className="nav-link"
									key={idx}
								>
									{page.name}
								</a>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</motion.div>
	);
};

export default Nav;
