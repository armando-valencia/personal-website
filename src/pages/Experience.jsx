import React from "react";
import MobileExperienceTabs from "../components/MobileExperienceTabs";
import DesktopExperienceTabs from "../components/DesktopExperienceTabs";

const Experience = () => {
	const companies = ["Landing", "Walmart Global", "JC Drywall Inc."];

	return (
		<div className="px-6 pt-6">
			<div className="flex justify-center m-3">
				<h1 className="text-2xl">My Experience</h1>
			</div>
			{/* Desktop */}
			<div className="flex justify-center sm:block hidden">
				<DesktopExperienceTabs companies={companies} />
			</div>

			{/* Mobile */}
			<div className="flex justify-center md:hidden">
				<MobileExperienceTabs companies={companies} />
			</div>
		</div>
	);
};

export default Experience;
