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
				"Leveraged knowledge of APIs to transfer data from webhook events into a PostgreSQL database",
				"Migrated system using React v16.5 to use v16.13; introduced hooks & functional components to codebase",
				"Skilled in Python scripting for data fetching and reporting, providing valuable insights for the senior management team",
				"Dedicated team player with great communication skills, actively participating in daily stand-up meetings and sprint planning sessions to ensure timely project delivery",
			],
			skills: "JavaScript, React, Rust, Python, SQL, GraphQL, Git",
		},
		{
			company: "Walmart Global",
			title: "Software Developer Intern",
			dates: "Jan 2021 - May 2021",
			desc: [
				"Designed and developed an engaging UI/UX for a responsive React web-app, using Figma to create wireframes and prototypes",
				"Enabled smooth navigation between pages by utilizing React-Router",
				"Utilized GitHub for version control, ensuring seamless code tracking, review, and updates",
				"Documented the codebase for future developers to maintain, facilitating easy code maintenance",
			],
			skills: "React, Bootstrap, JavaScript, Git, CSS",
		},
		{
			company: "Freelance Developer",
			title: "Freelance Developer",
			dates: "Dec 2020 - Mar 2022",
			desc: [
				"Lead the development and deployment of static web pages using Bootstrap and React",
				"Created UI/UX wireframes and prototypes using Figma",
				"Improved company's web engagement, boosting website traffic and resulting in new leads",
				"Maintained regular communication with clients to resolve concerns or ask questions",
				"Resolved issues issues arising from dependency and library updates to maintain optimal website performance",
			],
			skills: "React, Bootstrap, JavaScript, HTML, CSS",
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
