import React from "react";
import ExperienceTabs from "./ExperienceTabs";
import { TabList, TabPanels, Tabs } from "@chakra-ui/tabs";
import ExperienceTabPanel from "./ExperienceTabPanel";

const Experience = () => {
	const jobsData = [
		{
			company: "Landing",
			title: "Software Engineer",
			dates: "Aug 2021 - Dec 2022",
			desc: [
				"Implemented API integration to log phone calls into a PostgreSQL database using JavaScript and Rust",
				"Created React components using Material UI and ES6 features to automate processes for support teams",
				"Developed Node & Python scripts to pull data for reporting and write data to third-party data platform",
				"Migrated legacy code being used in CRM into Rust",
			],
			skills: "JavaScript, React, Rust, Python, PostgreSQL, Git, Node",
		},
		{
			company: "Walmart Global",
			title: "Software Developer Intern",
			dates: "Jan 2021 - May 2021",
			desc: [
				"Designed and developed UI of landing page for a React web-app",
				"Migrated a multi-page user experience into a single page to enhance user experience and performance",
				"Utilized GitHub as version control software to track and update code",
				"Documented codebase for future teams to refer back to",
			],
			skills: "JavaScript, React, Bootstrap, Git",
		},
		{
			company: "Freelance Developer",
			title: "Freelance Developer",
			dates: "Dec 2020 - Mar 2022",
			desc: [
				"Developed static website utilizing Bootstrap and React, as well as HTML, CSS, and JavaScript",
				"Create relevant UI/UX wireframes and mockups through Figma",
				"Increased company online engagement by 150% over a 6-month period",
				"Facilitate bi-weekly meetings with clients to discuss new features or bug fixes",
			],
			skills: "JavaScript, Bootstrap, Git, HTML, CSS",
		},
	];

	const mobileSelectedStyles = {
		color: "#FFFFFF",
		borderBottom: "3px solid",
		borderBottomColor: "#FFFFFF",
	};

	const mobileHoverStyles = {
		color: "#FFFFFF",
		borderBottom: "2px solid",
		borderBottomColor: "#FFFFFF",
		bg: "transparent",
	};

	const desktopSelectedStyles = {
		color: "#FFFFFF",
		borderLeft: "3px solid",
		borderLeftColor: "#FFFFFF",
	};

	const desktopHoverStyles = {
		color: "#FFFFFF",
		borderLeft: "2px solid",
		borderLeftColor: "#FFFFFF",
		bg: "transparent",
	};

	return (
		<div className="section-container">
			<div className="section-container__heading">
				<h1 className="heading">02. Experience</h1>
			</div>
			<div className="justify-center md:block hidden px-3 py-6 md:pb-24">
				<Tabs
					isFitted
					isLazy
					size="lg"
					className="text-gray-500 border-l-gray-500 flex align-center h-full"
					orientation="vertical"
				>
					<TabList>
						{jobsData.map((job, idx) => (
							<ExperienceTabs
								company={job.company}
								selectedStyle={desktopSelectedStyles}
								hoverStyle={desktopHoverStyles}
								key={`ExperienceTabs-${idx}`}
							/>
						))}
					</TabList>
					<TabPanels className="h-64">
						{jobsData.map((job, idx) => (
							<ExperienceTabPanel
								title={job.title}
								dates={job.dates}
								desc={job.desc}
								skills={job.skills}
								idx={idx}
								key={`ExperienceTabPanel-${idx}`}
								source="desktop"
							/>
						))}
					</TabPanels>
				</Tabs>
			</div>
			<div className="flex justify-center md:hidden">
				<Tabs
					isFitted
					isLazy
					size="lg"
					className="text-gray-500 border-b-gray-500 w-full"
					orientation="horizontal"
				>
					<TabList>
						{jobsData.map((job, idx) => (
							<ExperienceTabs
								company={job.company}
								selectedStyle={mobileSelectedStyles}
								hoverStyle={mobileHoverStyles}
								key={`ExperienceTabs-${idx}`}
							/>
						))}
					</TabList>
					<TabPanels className="h-72">
						{jobsData.map((job, idx) => (
							<ExperienceTabPanel
								title={job.title}
								dates={job.dates}
								desc={job.desc}
								skills={job.skills}
								idx={idx}
								key={`ExperienceTabPanel-${idx}`}
								source="mobile"
							/>
						))}
					</TabPanels>
				</Tabs>
			</div>
		</div>
	);
};

export default Experience;
