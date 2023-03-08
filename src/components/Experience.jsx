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
				"Implemented API integration to log inbound phone calls to a PostgreSQL database using JavaScript and Rust",
				"Built over 20 React components with Material UI to serve customer-facing teams",
				"Streamlined employee offboarding process through Node scripts, reducing costs by around $15k per month ",
				"Run Python scripts to pull data for reporting and QA & manage user configurations",
				"Built functionality for our cloud-based contact center by utilizing JavaScript and React on top of Twilio’s APIs ",
			],
			skills: "JavaScript, React, Rust, Python, PostgreSQL, Git, Node.js",
		},
		{
			company: "Walmart Global",
			title: "Software Developer Intern",
			dates: "Jan 2021 - May 2021",
			desc: [
				"Developed UI of landing page for a React web-app",
				"Migrated a multi-page user experience into a single page to enhance user experience",
				"Lead contributor in development cycle, from concept & design to development phases",
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
		color: "#6BAB90",
		borderBottom: "3px solid",
		borderBottomColor: "#6BAB90",
	};

	const mobileHoverStyles = {
		color: "#6BAB90",
		borderBottom: "2px solid",
		borderBottomColor: "#6BAB90",
		bg: "#6BAB90",
	};

	const desktopSelectedStyles = {
		color: "#6BAB90",
		borderLeft: "3px solid",
		borderLeftColor: "#6BAB90",
	};

	const desktopHoverStyles = {
		color: "#6BAB90",
		borderLeft: "2px solid",
		borderLeftColor: "#6BAB90",
		bg: "#393E46",
	};

	return (
		<div className="justify-center py-6 md:pb-24 md:pt-20">
			<div className="flex mt-20 mx-2 mb-2 md:m-2">
				<h1 className="text-3xl">02. Experience</h1>
			</div>
			<div className="justify-center md:block hidden p-3 md:pb-24">
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
					size="md"
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
