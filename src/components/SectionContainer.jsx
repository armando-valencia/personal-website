import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const divVariants = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	hidden: { opacity: 0, scale: 0 },
};

const homeVariants = {
	visible: { opacity: 1, transition: { duration: 1.5 } },
	hidden: { opacity: 0 },
};

const SectionContainer = ({ name, component }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

	return (
		<motion.div
			id={name}
			className={
				name == "home"
					? "h-[85vh] flex items-center text-blue"
					: "flex items-center justify-center"
			}
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={name == "home" ? homeVariants : divVariants}
		>
			{component}
		</motion.div>
	);
};
export default SectionContainer;
