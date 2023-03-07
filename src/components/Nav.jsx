import React, { useState } from "react";
import { FiAlignRight, FiX } from "react-icons/fi";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiBriefcase } from "react-icons/bi";

const Nav = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	const pages = [
		{ name: "Home", icon: <AiOutlineHome /> },
		{ name: "About", icon: <BsPerson /> },
		{ name: "Experience", icon: <BiBriefcase /> },
		{ name: "Contact", icon: <AiOutlinePhone /> },
	];

	return (
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
					<FiX onClick={handleNav} size={40} />
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

					<FiAlignRight onClick={handleNav} size={40} />
				</div>
			)}

			{nav && (
				<nav className="fixed w-full h-screen bg-black/80 flex flex-col justify-center items-center z-20">
					{pages.map((page, idx) => (
						<button
							className="mobile_nav-link"
							key={idx}
							onClick={handleNav}
						>
							{page.icon}
							<a
								href={`#${page.name.toLowerCase()}`}
								className="pl-2"
							>
								{page.name}
							</a>
						</button>
					))}
				</nav>
			)}
			<div className="sm:block hidden bg-quarternary text-lg">
				<div className="flex justify-between items-center py-3 px-10">
					<a href="#">
						<div className="flex items-center gap-3 uppercase">
							<img
								src="\picture_2.jpg"
								alt="Picture of myself"
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
									href={`#${page.name.toLowerCase()}`}
									className="nav-link"
									key={idx}
								>
									{page.name}
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
