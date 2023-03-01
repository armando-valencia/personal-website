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
				"Implemented API integration to log inbound calls to a PostgreSQL database via REST API",
			],
			skills: "JavaScript, React, Rust, Python, PostgreSQL, Git",
		},
		{
			company: "Walmart Global",
			title: "Software Developer Intern",
			dates: "Jan 2021 - May 2021",
			desc: [
				"Developed UI of landing page for a React web-app",
				"Migrated a multi-page user experience into a single page to enhance user engagementp",
				"Strong contributor in entire development cycle, from concept & design to development phases",
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
		color: "#63fdd8",
		borderBottom: "3px solid",
		borderBottomColor: "#63fdd8",
	};

	const mobileHoverStyles = {
		color: "#63fdd8",
		borderBottom: "2px solid",
		borderBottomColor: "#63fdd8",
		bg: "#163563",
	};

	const desktopSelectedStyles = {
		color: "#63fdd8",
		borderLeft: "3px solid",
		borderLeftColor: "#63fdd8",
	};

	const desktopHoverStyles = {
		color: "#63fdd8",
		borderLeft: "2px solid",
		borderLeftColor: "#63fdd8",
		bg: "#163563",
	};

	return (
		<div className="pt-6 justify-center">
			<div className="flex justify-center m-3">
				<h1 className="text-3xl">02. Experience</h1>
			</div>
			<div className="flex justify-center sm:block hidden">
				<Tabs
					isFitted
					isLazy
					size="md"
					className="text-gray-500 border-l-gray-500 flex align-center"
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
					size="md"
					className="text-gray-500 border-b-gray-500 flex"
					orientation="horizontal"
				>
					<TabList>
						{jobsData.map((job, idx) => (
							<ExperienceTabs
								company={job.company}
								selectedStyle={mobileSelectedStyles}
								hoverStyle={mobileHoverStyles}
								key={`MobileExperienceTabs-${idx}`}
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