import React from "react";
import { Tab, TabList, TabPanels, TabPanel, Tabs } from "@chakra-ui/tabs";

const MobileExperienceTabs = ({ companies }) => {
	return (
		<Tabs
			isFitted
			isLazy
			size="md"
			className="text-gray-500 border-b-gray-500 flex"
			orientation="horizontal"
		>
			<TabList>
				{companies.map((company) => (
					<Tab
						_selected={{
							color: "#63fdd8",
							borderBottom: "3px solid",
							borderBottomColor: "#63fdd8",
						}}
						_hover={{
							color: "#63fdd8",
							borderBottom: "2px solid",
							borderBottomColor: "#63fdd8",
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
					<h1 className="tab-panel__title">
						Junior Software Developer
					</h1>
					<h3 className="tab-panel__dates">Aug 2021 - Dec 2022</h3>
					<ul className="tab-panel__desc">
						<li>
							Implemented API integration to run event callback
							function that sends event data to Rust backend
							service, then injected data into PostgreSQL database
						</li>
						<li>
							Built over 20 React components using Material UI to
							serve customer-facing teams
						</li>
						<li>
							Collaborated with IT department to automate
							onboarding process for new hires through Node script
							and Google SSO
						</li>
						<li>
							Streamlined the employee offboarding process, saving
							nearly $15k in monthly costs through python scripts
						</li>
					</ul>
					<br />
					<div className="tab-panel__skills-mobile">
						JavaScript, React, Rust, Python, PostgreSQL, Git
					</div>
				</TabPanel>
				{/* Walmart */}
				<TabPanel className="">
					<h1 className="tab-panel__title">
						Software Developer Intern
					</h1>
					<h3 className="tab-panel__dates">Jan 2021 - May 2021</h3>
					<ul className="tab-panel__desc">
						<li>
							Developed UI of landing page for a React web-app
						</li>
						<li>
							Worked in an Agile development cycle with bi-weekly
							sprints
						</li>
						<li>
							Migrated a multi-page user experience into a single
							page to enhance user engagement
						</li>
						<li>
							Strong contributor in entire development cycle, from
							concept & design to development phases
						</li>
						<li>
							Utilized GitHub as version control software to track
							and update code
						</li>
						<li>
							Documented codebase for future teams to refer back
							to
						</li>
					</ul>
					<br />
					<div className="tab-panel__skills-mobile">
						JavaScript, React, Bootstrap, Git
					</div>
				</TabPanel>
				{/* JC Drywall Inc. */}
				<TabPanel className="">
					<h1 className="tab-panel__title">Freelance Developer</h1>
					<h3 className="tab-panel__dates">Dec 2020 - Mar 2022</h3>
					<ul className="tab-panel__desc">
						<li>
							Developed static website utilizing Bootstrap and
							React, as well as HTML, CSS, and JavaScript
						</li>
						<li>
							Create relevant UI/UX wireframes and mockups through
							Figma
						</li>
						<li>
							Increased company online engagement by 150% over a
							6-month period
						</li>
						<li>
							Facilitate bi-weekly meetings with clients to
							discuss new features or bug fixes
						</li>
					</ul>
					<br />
					<div className="tab-panel__skills-mobile">
						JavaScript, Bootstrap, Git
					</div>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default MobileExperienceTabs;
