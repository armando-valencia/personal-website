import { motion } from "framer-motion";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const Home = () => {
	return (
		<motion.div
			className="text-quarternary p-2 text-2xl md:text-4xl block"
			initial="hidden"
			animate="visible"
		>
			<h1 className="py-2 md:py-4 text-xl md:text-3xl font-bold">
				Hey! My name is{" "}
				<span className="text-secondary">Armando Valencia</span>.
				Welcome to my personal website.
			</h1>
			<p className="text-lg md:text-xl">
				I'm a <span className="text-secondary">software developer</span>{" "}
				from Birmingham, AL.{" "}
			</p>
			<div className="flex justify-center px-6 py-4 md:py-8 mt-4 md:mt-8 gap-3 md:gap-4 border-t border-secondary text-secondary w-full">
				<motion.a
					href={import.meta.env.VITE_GITHUB_URL}
					target="_blank"
					className="hover:text-white flex items-center"
					whileHover={{ scale: 1.2 }}
				>
					<GrGithub size={30} />
				</motion.a>
				<motion.a
					href={import.meta.env.VITE_LINKEDIN_URL}
					target="_blank"
					className="hover:text-white flex items-center"
					whileHover={{ scale: 1.2 }}
				>
					<GrLinkedin size={30} />
				</motion.a>
			</div>
		</motion.div>
	);
};

export default Home;
