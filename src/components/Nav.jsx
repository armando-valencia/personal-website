import React, { useState } from "react";
import { FiAlignRight, FiX } from "react-icons/fi";
import MobileNavItem from "./MobileNavItem";
import NavItem from "./NavItem";

const Nav = () => {
	const [nav, setNav] = useState(false);

	// flip navigation state on mobile vieww
	const handleNav = () => {
		setNav(!nav);
	};

	const pages = ["Home", "Experience", "About", "Contact"];

	return (
		<div className="text-secondary p-3">
			{nav === true ? (
				<FiX
					onClick={handleNav}
					className="absolute top-4 right-4 z-[99] sm:hidden cursor-pointer"
					size={30}
				/>
			) : (
				<FiAlignRight
					onClick={handleNav}
					className="absolute top-4 right-4 z-[99] sm:hidden cursor-pointer"
					size={30}
				/>
			)}

			{nav && (
				<nav className="fixed w-full h-screen bg-black/50 flex flex-col justify-center items-center z-20">
					{pages.map((page) => (
						<MobileNavItem
							page={page}
							key={page}
							isActive={({ isActive }) => {
								return isActive
									? "mobile_nav-link__active"
									: "mobile_nav-link";
							}}
							handleNav={handleNav}
						/>
					))}
				</nav>
			)}

			<div className="flex justify-between items-center px-8">
				<div>
					<img src="\Logo.png" alt="" className="h-9" />
				</div>
				<div>
					<nav className="flex bg-transparent max-sm:hidden">
						<ul className="pl-3">
							{pages.map((page) => (
								<NavItem
									page={page}
									key={page}
									isActive={({ isActive }) => {
										return isActive
											? "nav-link__active"
											: "nav-link";
									}}
								/>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Nav;
