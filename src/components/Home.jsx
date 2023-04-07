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
			<p className="text-xl md:text-2xl">
				I am a{" "}
				<span className="text-secondary">software developer</span> from
				Birmingham, AL that is ambitious to deliver innovative software
				solutions.{" "}
			</p>
		</motion.div>
	);
};

export default Home;
