import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const headingVariants = {
	hidden: {
		x: -900,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0,
			type: "tween",
			duration: 0.5,
		},
	},
};

const SectionHeader = ({ name, idx }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<>
			{name !== "home" && (
				<>
					<div className="md:block hidden">
						<motion.div
							className="heading"
							variants={headingVariants}
							initial="hidden"
							animate={controls}
							ref={ref}
						>
							0{idx}. {name}
						</motion.div>
					</div>
					<div className="md:hidden">
						<div className="heading">
							0{idx}. {name}
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default SectionHeader;
