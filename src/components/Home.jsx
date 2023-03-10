import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 1, duration: 1.5 } },
};

const Home = () => {
	const menuItems = ["About", "Experience", "Contact"];
	return (
		<motion.div
			className="text-tertiary p-2 text-md flex items-center flex-col"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="flex justify-center">
				<img
					src="\picture.jpg"
					alt="Picture of myself"
					className="rounded h-44 px-3 pb-3 mb-4"
				/>
			</div>
			<div className="text-center text-quarternary">
				Hey! My name is{" "}
				<span className="text-tertiary">Armando Valencia</span> and I'm
				a software engineer.
				<br />
				<br />
			</div>
			<div className="list-none text-quarternary">
				{menuItems.map((menuItem, idx) => (
					<li className="text-left" key={idx}>
						<a
							href={`#${menuItem.toLowerCase()}`}
							className="hover:text-tertiary "
						>
							&gt; {menuItem.toUpperCase()}
						</a>
					</li>
				))}
			</div>
		</motion.div>
	);
};

export default Home;
