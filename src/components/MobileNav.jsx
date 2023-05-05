import { useState } from "react";
import { MdOutlineClose, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { motion } from "framer-motion";
import { BiBriefcase } from "react-icons/bi";

const tabs = [
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
			staggerChildren: 3,
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
			duration: 0.5,
		},
	},
};

const MobileNav = () => {
	const [showMenu, setShowMenu] = useState(false);

	const onMenuClick = () => {
		setShowMenu(!showMenu);
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
					variants={containerVariant}
					initial="hidden"
					animate="visible"
				>
					<motion.div
						className="rounded-full focus:scale-105 bg-[#10161c] p-4"
						onClick={onMenuClick}
						variants={itemsVariant}
						initial="hidden"
						animate="visible"
					>
						{!showMenu ? (
							<MdOutlineKeyboardArrowUp size={25} />
						) : (
							<MdOutlineClose size={25} />
						)}
					</motion.div>

					{showMenu && (
						<>
							{tabs.map((tab) => (
								<motion.a
									href={`${
										tab.name == "Home"
											? "#"
											: "#" + tab.name.toLowerCase()
									}`}
									key={tab.name}
									variants={itemsVariant}
									initial="hidden"
									animate="visible"
								>
									<motion.button
										className="rounded-full bg-[#10161c] p-4 focus:scale-105"
										onClick={onMenuClick}
										variants={itemsVariant}
										initial="hidden"
										animate="visible"
										key={tab.name}
									>
										{tab.icon}
									</motion.button>
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
