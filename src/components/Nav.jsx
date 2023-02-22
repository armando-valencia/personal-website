import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="flex bg-black/80 p-2 items-center text-white justify-start space-x-1 max-[639px]:hidden">
			<ul className="pl-3">
				<NavLink className="pl-3" to="/" end>
					Home
				</NavLink>
				<NavLink className="pl-3" to="/about" end>
					About
				</NavLink>
				<NavLink className="pl-3" to="/contact" end>
					Contact
				</NavLink>
			</ul>
		</nav>
	);
};

export default Nav;
