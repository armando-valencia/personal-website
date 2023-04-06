import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			className="text-quarternary p-2 text-2xl md:text-4xl block"
			initial="hidden"
			animate="visible"
		>
			<h1 className="py-2 md:py-4 text-2xl md:text-4xl font-bold">
				Hey! My name is{" "}
				<span className="text-secondary">Armando Valencia</span>.
				Welcome to my personal website.
			</h1>
			<p className="text-secondary text-xl md:text-2xl">
				I am a software developer from Birmingham, AL.{" "}
			</p>
		</motion.div>
	);
};

export default Home;
