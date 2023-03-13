import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 1, duration: 1.5 } },
};

const imgVariants = {
	hidden: {
		y: -2000,
	},
	visible: {
		y: 0,
		transition: {
			yoyo: 10,
			delay: 0.3,
			type: "tween",
			duration: 3,
		},
	},
};

const menuVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 10.7, duration: 0.3 } },
};

const Home = () => {
	//TODO: when hovering over the menu options, add an arrow to the left of the text (maybe using framer motion?)
	const menuItems = ["About", "Experience", "Contact"];
	return (
		<motion.div
			className="text-tertiary p-2 text-2xl md:text-4xl flex items-center flex-col"
			// variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="flex justify-center">
				<motion.img
					variants={imgVariants}
					src="\ARMANDO.png"
					alt=""
					className="rounded h-44 md:h-60 px-3 pb-3 mb-4"
				/>
			</div>
			<TypeAnimation
				sequence={[
					"",
					4000,
					"Hey!",
					1000,
					"Hey! My name is Armando Valencia.",
					1200,
					"Hey! My name is Armando Valencia. I like to build things.",
					1300,
				]}
				speed={40}
			/>

			<motion.div
				variants={menuVariants}
				className="list-none text-quarternary pt-4"
			>
				{menuItems.map((menuItem, idx) => (
					<li className="text-left md:text-3xl p-2 md:p-3" key={idx}>
						<a
							href={`#${menuItem.toLowerCase()}`}
							className="hover:text-tertiary"
						>
							&gt; {menuItem.toUpperCase()}
						</a>
					</li>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Home;
