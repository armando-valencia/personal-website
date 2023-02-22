import React, { useState } from "react";
import {
	AiOutlineMenu,
	AiOutlineHome,
	AiOutlineProject,
	AiOutlinePhone,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

const Sidenav = () => {
	const [nav, setNav] = useState(false);

	// flip navigation state
	const handleNav = () => {
		setNav(!nav);
	};

	const pages = ["Home", "About", "Contact"];

	return (
		<div>
			<AiOutlineMenu
				onClick={handleNav}
				className="absolute top-4 right-4 z-[99] sm:hidden cursor-pointer"
			/>

			{nav ? (
				<div className="fixed w-full h-screen bg-black/30 flex flex-col justify-center items-center z-20">
					{/* TODO: make NavItem reusable component*/}

					{pages.map((page) => (
						<NavItem page={page} key={page} />
					))}

					{/*<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "nav-link__active" : "nav-link"
						}
					>
						<AiOutlineHome size={20} />
						<span className="pl-2">Home</span>
					</NavLink>
					<NavLink
						to="/about"
						className="w-[75%] flex justify-center items=center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
					>
						<BsPerson size={20} />
						<span className="pl-2">About</span>
					</NavLink>
					<NavLink
						to="/contact"
						className="w-[75%] flex justify-center items=center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
					>
						<AiOutlinePhone size={20} />
						<span className="pl-2">Contact</span>
					</NavLink>
					*/}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Sidenav;
