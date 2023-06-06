import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const headingVariants = {
    hidden: {
        y: 200,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const SectionHeader = ({ name }) => {
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
                <div className="pt-8">
                    <motion.div
                        className="text-2xl md:text-3xl text-secondary capitalize pt-10"
                        variants={headingVariants}
                        initial="hidden"
                        animate={controls}
                        ref={ref}
                    >
                        {name}
                    </motion.div>
                </div>
            )}
        </>
    );
};
export default SectionHeader;
