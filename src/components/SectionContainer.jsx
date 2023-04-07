import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const divVariants = {
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			delay: 0.7,
		},
	},
	hidden: { opacity: 0 },
};

const homeVariants = {
	visible: {
		opacity: 1,
		transition: {
			duration: 1.5,
		},
	},
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
			className={
				name == "home"
					? "h-[85vh] flex items-center"
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
