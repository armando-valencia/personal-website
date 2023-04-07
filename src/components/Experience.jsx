import React from "react";
import ExperienceTabs from "./ExperienceTabs";
import { TabList, TabPanels, Tabs } from "@chakra-ui/tabs";
import ExperienceTabPanel from "./ExperienceTabPanel";

const Experience = () => {
	const jobsData = [
		{
			company: "Landing",
			title: "Junior Software Developer",
			dates: "Aug 2021 - Dec 2022",
			desc: [
				"Implemented API integration to log phone calls to a PostgreSQL database via REST API calls, using JavaScript and Rust",
				"Utilized Material UI to create modern, scalable React components to deliver an engaging UI for support teams",
				"Used knowledge of frontend technologies to create Lightning Web Components (frontend) and OOP to write Apex (backend) with test classes for Salesforce (CRM)",
				"Migrate models and API integrations from Salesforce to new in-house platform built using Rust",
			],
			skills: "JavaScript, React, Rust, Python, PostgreSQL, Git, Node",
		},
		{
			company: "Walmart Global",
			title: "Software Developer Intern",
			dates: "Jan 2021 - May 2021",
			desc: [
				"Designed and developed the UI for a React web-app",
				"Migrated a multi-page app into a single page to create an engaging UX and increase performance",
				"Utilized React-Router to enable smooth navigation",
				"Contributed to the full development cycle, from concept to development",
				"Utilized GitHub as version control software to track and update code",
				"Documented the codebase for future developers to maintain",
			],
			skills: "JavaScript, React, Bootstrap, Git",
		},
		{
			company: "Freelance Developer",
			title: "Freelance Developer",
			dates: "Dec 2020 - Mar 2022",
			desc: [
				"Designed, developed, and deployed static web pages using Bootstrap and React",
				"Created and presented modern UI/UX wireframes and mockups using Figma",
				"Boosted company's web engagement by over 200%",
				"Conduct bi-weekly meetings with clients to discuss new requests and content updates",
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
			<div className="justify-center md:block hidden px-3 md:pb-24">
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
					<TabPanels className="h-fit">
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
