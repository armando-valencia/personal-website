import { Tab, TabList, TabPanels, TabPanel, Tabs } from "@chakra-ui/tabs";
import React from "react";

const Experience = () => {
	const companies = ["Landing", "Walmart Global", "JC Drywall Inc."];

	return (
		<div className="p-8 ">
			<div className="flex justify-center m-4">
				<h1>My Experience</h1>
			</div>
			<div className="flex justify-center">
				<Tabs
					isFitted
					isLazy
					size="sm"
					className="text-gray-500 border-l-gray-500 w-1/2 flex"
					orientation="vertical"
				>
					<TabList>
						{companies.map((company) => (
							<Tab
								_selected={{
									color: "#63fdd8",
									borderLeft: "3px solid",
									borderLeftColor: "#63fdd8",
								}}
								_hover={{
									color: "#63fdd8",
									borderLeft: "2px solid",
									borderLeftColor: "#63fdd8",
									bg: "#163563",
								}}
								key={company}
							>
								{company}
							</Tab>
						))}
					</TabList>

					<TabPanels>
						{/* Landing */}
						<TabPanel className="">
							<div className="">
								<h1 className="tab-panel__h1">
									Junior Software Developer
								</h1>
								<h3 className="text-gray-400 text-xs font-light italic">
									August 2021 - December 2022
								</h3>
							</div>
							<ul className="text-tertiary text-xs list-disc py-1">
								<li>
									Implemented API integration to run event
									callback function that sends event data to
									Rust backend service, then injected data
									into PostgreSQL database
								</li>
								<li>
									Built over 20 React components using
									Material UI to serve customer-facing teams
								</li>
								<li>
									Collaborated with IT department to automate
									onboarding process for new hires through
									Node script and Google SSO
								</li>
								<li>
									Streamlined the employee offboarding
									process, saving nearly $15k in monthly costs
									through python scripts
								</li>
							</ul>

							<h3 className="text-secondary text-xs">
								JavaScript, React, Rust, Python, PostgreSQL, Git
							</h3>
						</TabPanel>
						{/* Walmart */}
						<TabPanel className="">
							<h1 className="tab-panel__h1">
								Frontend Software Developer - Internship
							</h1>
							<h3 className="text-gray-400 text-xs font-light italic">
								January 2021 - May 2021
							</h3>

							<ul className="text-tertiary text-xs list-disc py-1">
								<li>
									Developed UI of landing page for a React
									web-app
								</li>
								<li>
									Worked in an Agile development cycle with
									bi-weekly sprints
								</li>
								<li>
									Migrated a multi-page user experience into a
									single page to enhance user engagement
								</li>
								<li>
									Strong contributor in entire development
									cycle, from concept & design to development
									phases
								</li>
								<li>
									Utilized GitHub as version control software
									to track and update code
								</li>
								<li>
									Documented codebase for future teams to
									refer back to
								</li>
							</ul>
							<h3 className="text-secondary text-xs">
								JavaScript, React, Bootstrap, Git
							</h3>
						</TabPanel>
						{/* JC Drywall Inc. */}
						<TabPanel className="">
							<h1 className="tab-panel__h1">
								Software Developer - Freelance
							</h1>
							<h3 className="text-gray-400 text-xs font-light italic">
								December 2020 - March 2022
							</h3>

							<ul className="text-tertiary text-xs list-disc py-1">
								<li>
									Developed static website utilizing Bootstrap
									and React, as well as HTML, CSS, and
									JavaScript
								</li>
								<li>
									Create relevant UI/UX wireframes and mockups
									through Figma
								</li>
								<li>
									Increased company online engagement by 150%
									over a 6-month period
								</li>
								<li>
									Facilitate bi-weekly meetings with clients
									to discuss new features or bug fixes
								</li>
							</ul>
							<h3 className="text-secondary text-xs">
								JavaScript, Bootstrap, Git
							</h3>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</div>
		</div>
	);
};

export default Experience;
