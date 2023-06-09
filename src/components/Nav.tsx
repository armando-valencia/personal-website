import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiBriefcase } from "react-icons/bi";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {
        y: -400,
    },
    visible: {
        y: 0,
        transition: {
            delay: 0.3,
            type: "tween",
            duration: 0.4,
        },
    },
};

const Nav = () => {
    const pages = [
        { name: "Home", icon: <AiOutlineHome /> },
        { name: "About", icon: <BsPerson /> },
        { name: "Experience", icon: <BiBriefcase /> },
        { name: "Contact", icon: <AiOutlinePhone /> },
    ];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="sticky top-1 w-full z-50 bg-transparent text-quarternary"
            key="navbar"
        >
            <div className="flex justify-end items-center py-4 px-16">
                <motion.nav
                    className="md:block bg-transparent text-primary"
                    initial="hidden"
                    animate="visible"
                >
                    <ul className="px-3 py-1 flex items-center">
                        {pages.map((page, idx) => (
                            <a
                                href={`${
                                    page.name == "Home"
                                        ? "#"
                                        : "#" + page.name.toLowerCase()
                                }`}
                                className="cursor-pointer hover:text-secondary text-quarternary text-xl bg-transparent p-5"
                                key={page.name + idx + "-nav"}
                            >
                                {page.name}
                            </a>
                        ))}
                    </ul>
                </motion.nav>
            </div>
        </motion.div>
    );
};

export default Nav;
