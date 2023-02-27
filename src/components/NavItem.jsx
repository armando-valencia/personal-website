import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ page, isActive }) => {
	return (
		<NavLink
			to={`/${page == "home" ? "" : page.toLowerCase()}`}
			className={isActive}
			end
		>
			&gt; {page}
		</NavLink>
	);
};

export default NavItem;
