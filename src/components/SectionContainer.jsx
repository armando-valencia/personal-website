import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const homeVariants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    hidden: { opacity: 0 },
};

const contentVariants = {
    hidden: {
        y: 200,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.05,
            duration: 0.5,
        },
    },
};

const SectionContainer = ({ name, component }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            className={
                name == "home"
                    ? "h-screen md:h-[85vh] flex items-center"
                    : "flex items-center justify-center pt-2 md:pt-6"
            }
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={name == "home" ? homeVariants : contentVariants}
        >
            {component}
        </motion.div>
    );
};
export default SectionContainer;
