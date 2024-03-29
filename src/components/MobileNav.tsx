import { useState } from "react";
import { MdOutlineClose, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { motion } from "framer-motion";
import { BiBriefcase } from "react-icons/bi";
import { ReactElement } from "react";

interface Sections {
    name: string;
    icon: ReactElement;
}

const tabs: Sections[] = [
    { name: "Contact", icon: <AiOutlinePhone size={25} /> },
    { name: "Experience", icon: <BiBriefcase size={25} /> },
    { name: "About", icon: <BsPerson size={25} /> },
    { name: "Home", icon: <AiOutlineHome size={25} /> },
];

const containerVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
        },
    },
};

const itemsVariant = {
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

const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const onMenuClick = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <motion.div
            className="flex flex-col reverse relative md:hidden"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
        >
            <div className="fixed bottom-5 right-5">
                <motion.div
                    className="flex flex-col-reverse relative gap-2"
                    initial={{ opacity: 0, translateY: 40 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.div
                        className="rounded-full focus:scale-105 bg-[#191f26] border-[#10161c] border p-4"
                        onClick={onMenuClick}
                        variants={itemsVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        {!openMenu ? (
                            <MdOutlineKeyboardArrowUp size={25} />
                        ) : (
                            <MdOutlineClose size={25} />
                        )}
                    </motion.div>

                    {openMenu && (
                        <>
                            {tabs.map((tab, idx) => (
                                <motion.a
                                    href={`${
                                        tab.name == "Home"
                                            ? "#"
                                            : "#" + tab.name.toLowerCase()
                                    }`}
                                    key={tab.name}
                                    initial={{ opacity: 0, translateY: 40 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{
                                        duration: 0.15,
                                        delay: idx * 0.1,
                                    }}
                                    className="rounded-full bg-[#10161c] p-4"
                                    onClick={onMenuClick}
                                >
                                    {tab.icon}
                                </motion.a>
                            ))}
                        </>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};
export default MobileNav;
