import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
			<TypeAnimation
				sequence={[
					"",
					2000,
					"Hey!",
					1000,
					"Hey! My name is Armando Valencia.",
					1300,
					"Hey! My name is Armando Valencia. I'm a software engineer.",
					1300,
				]}
				speed={40}
			/>
			<div className="list-none text-quarternary">
				{menuItems.map((menuItem, idx) => (
					<li className="text-left" key={idx}>
						<a
							href={`#${menuItem.toLowerCase()}`}
							className="hover:text-tertiary"
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
