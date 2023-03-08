import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 1, duration: 1.5 } },
};

const Home = () => {
	return (
		<motion.div
			className="text-tertiary p-2 text-2xl"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="flex justify-center">
				<img
					src="\picture.jpg"
					alt="Picture of myself"
					className="rounded-full h-60 px-3 pb-3 mb-4"
				/>
			</div>
			<div className="text-center">
				Hey! My name is{" "}
				<span className="text-secondary">Armando Valencia</span> and I'm
				a 23 year old software engineer from Birmingham, Alabama.
				<br />
				<br />
			</div>
		</motion.div>
	);
};

export default Home;
