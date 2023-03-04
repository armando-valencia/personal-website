import React, { useState } from "react";
import { FiAlignRight, FiX } from "react-icons/fi";

const Nav = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	const pages = ["Home", "About", "Experience", "Contact"];

	return (
		//TODO: sticky nav bar messes with the h-screen class; specifically the padding
		<div className="sticky top-0 w-full z-50">
			{nav === true ? (
				<div className="p-3 bg-quarternary flex justify-between items-center z-[99] sm:hidden">
					<a href="#" onClick={handleNav}>
						<div className="flex items-center gap-3 uppercase">
							<img
								src="\picture_2.jpg"
								alt=""
								className="rounded-full h-12"
							/>
							<span className="font-semibold text-lg">
								Armando Valencia
							</span>
						</div>
					</a>
					<FiX onClick={handleNav} className="" size={40} />
				</div>
			) : (
				<div className="p-3 bg-quarternary flex justify-between items-center z-[99] sm:hidden">
					<a href="#">
						<div className="flex items-center gap-3 uppercase">
							<img
								src="\picture_2.jpg"
								alt=""
								className="rounded-full h-12"
							/>
							<span className="font-semibold text-lg">
								Armando Valencia
							</span>
						</div>
					</a>

					<FiAlignRight onClick={handleNav} className="" size={40} />
				</div>
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

			{/* TODO: make the navbar position independent from the rest of the screen. 
				When adding vertical padding to the navbar, this should not push other 
				contents of the webpage lower down the screen
			*/}
			<div className="sm:block hidden bg-quarternary text-lg">
				<div className="flex justify-between items-center py-3 px-10">
					<a href="#">
						<div className="flex items-center gap-3 uppercase">
							<img
								src="\picture_2.jpg"
								alt=""
								className="rounded-full h-12"
							/>
							<span className="font-semibold">
								Armando Valencia
							</span>
						</div>
					</a>

					<nav className="sm:block hidden bg-quarternary">
						<ul className="px-3 py-2">
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
