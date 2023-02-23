import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const NavItem = ({ page, isActive, handleNav }) => {
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
		>
			{navIcon(page)}
			<span className="pl-2">{page}</span>
		</NavLink>
	);
};

export default NavItem;
