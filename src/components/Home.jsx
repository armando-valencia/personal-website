import { motion } from "framer-motion";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const containerVariant = {
	hidden: {
		y: 40,
	},
	visible: {
		y: 0,
		transition: {
			type: "spring",
			duration: 1,
		},
	},
};

const iconVariant = {
	hidden: {
		y: -200,
	},
	visible: {
		y: 0,
		transition: {
			type: "spring",
			duration: 1,
			delay: 0.5,
		},
	},
};

const Home = () => (
	<motion.div
		className="text-quarternary p-2 text-2xl md:text-4xl block overflow-hidden"
		initial="hidden"
		animate="visible"
	>
		<motion.h1
			className="py-2 md:py-4 text-xl md:text-3xl font-bold"
			variants={containerVariant}
			initial="hidden"
			animate="visible"
		>
			Hey! My name is{" "}
			<span className="text-secondary">Armando Valencia</span>. Welcome to
			my personal website.
		</motion.h1>
		<motion.p
			className="text-lg md:text-xl"
			variants={containerVariant}
			initial="hidden"
			animate="visible"
		>
			I'm a <span className="text-secondary">software developer</span>{" "}
			from Birmingham, AL.{" "}
		</motion.p>
		<div className="flex justify-center px-6 py-4 md:py-8 mt-4 md:mt-8 gap-3 md:gap-4 border-t border-secondary text-secondary w-full overflow-hidden">
			<motion.a
				href={import.meta.env.VITE_GITHUB_URL}
				target="_blank"
				className="hover:text-white flex items-center"
				whileHover={{ scale: 1.2 }}
				variants={iconVariant}
				initial="hidden"
				animate="visible"
			>
				<GrGithub size={30} />
			</motion.a>
			<motion.a
				href={import.meta.env.VITE_LINKEDIN_URL}
				target="_blank"
				className="hover:text-white flex items-center"
				whileHover={{ scale: 1.2 }}
				variants={iconVariant}
				initial="hidden"
				animate="visible"
			>
				<GrLinkedin size={30} />
			</motion.a>
		</div>
	</motion.div>
);

export default Home;
