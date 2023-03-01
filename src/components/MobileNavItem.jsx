import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const MobileNavItem = ({ page, isActive, handleNav }) => {
	const navIcon = (page) => {
		switch (page) {
			case "Home":
				return <AiOutlineHome size={20} />;
			case "About":
				return <BsPerson size={20} />;
			case "Contact":
				return <AiOutlinePhone size={20} />;
		}
	};

	return (
		<NavLink
			to={`/${page == "Home" ? "" : page.toLowerCase()}`}
			className={isActive}
			onClick={handleNav}
			end
		>
			{navIcon(page)}
			<h1 className="pl-2">{page}</h1>
		</NavLink>
	);
};

export default MobileNavItem;
