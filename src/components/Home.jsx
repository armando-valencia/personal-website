import React, { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			className="text-tertiary p-2 text-2xl"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1, duration: 1 }}
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
