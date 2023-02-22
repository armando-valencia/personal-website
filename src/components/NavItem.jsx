import React from "react";
import { NavLink } from "react-router-dom";
import {
	AiOutlineMenu,
	AiOutlineHome,
	AiOutlineProject,
	AiOutlinePhone,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const NavItem = ({ page }) => {
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
		<div>
			<NavLink
				to={`/${page == "Home" ? "" : page.toLowerCase()}`}
				className={({ isActive }) =>
					isActive ? "nav-link__active" : "nav-link"
				}
			>
				{navIcon(page)}
				<span className="pl-2">{page}</span>
			</NavLink>
		</div>
	);
};

export default NavItem;
