import React, { useState } from "react";
import { FiAlignRight, FiX } from "react-icons/fi";
import MobileNavItem from "./MobileNavItem";
import NavItem from "./NavItem";

const Nav = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	const pages = ["Home", "About", "Experience", "Contact"];

	return (
		<div className="sticky top-0 z-50">
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
				<nav className="fixed w-full h-screen bg-black/80 flex flex-col justify-center items-center z-20">
					{/*}
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
						))}*/}

					{pages.map((page, idx) => (
						<a
							href={`#${page.toLowerCase()}`}
							className="mobile_nav-link"
							key={idx}
							onClick={handleNav}
						>
							{page}
						</a>
					))}
				</nav>
			)}

			<div className="flex justify-end items-center px-2 md:px-8 py-4 sticky">
				{/*<div>
					<img src="\Logo.png" alt="" className="h-8" />
						</div>*/}
				<div>
					<nav className="bg-transparent sm:block hidden">
						<ul className="pl-3">
							{/*}
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
								*/}
							{pages.map((page, idx) => (
								<a
									href={`#${page.toLowerCase()}`}
									className="nav-link"
									key={idx}
								>
									{page}
								</a>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Nav;
