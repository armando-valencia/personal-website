import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
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
				<nav className="fixed w-full h-screen bg-black/30 flex flex-col justify-center items-center z-20">
					{pages.map((page) => (
						<NavItem
							page={page}
							key={page}
							isActive={({ isActive }) => {
								return isActive
									? "nav-link__active"
									: "nav-link";
							}}
							handleNav={handleNav}
						/>
					))}
				</nav>
			) : (
				""
			)}
		</div>
	);
};

export default Sidenav;
