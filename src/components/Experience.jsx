import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/tabs";
import ExperienceTabPanel from "./ExperienceTabPanel";

const jobsData = [
    {
        company: "Landing",
        title: "Junior Software Developer",
        dates: "Aug 2021 - Dec 2022",
        desc: [
            "Improved data tracking by implementing by logging data from third-party platforms to a PostgreSQL database",
            "Migrated system using React v16.5 to use v16.13; introduced hooks & functional components to codebase",
            "Developed Python scripts for data fetching, providing written reports for the senior management team",
            "Wrote documentation for new features, navigating through the system, and API integrations",
            "Collaborated with stakeholders to gather requirements and track progress to ensure that deadlines were met",
            "Worked with team of 3 developers to migrate system from Salesforce to a Rust backend web service",
        ],
        skills: "JavaScript, React, Rust, Python, SQL, GraphQL, Git",
    },
    {
        company: "Walmart Global",
        title: "Software Developer Intern",
        dates: "Jan 2021 - May 2021",
        desc: [
            "Designed and developed UI/UX for a responsive single-page application created with React",
            "Leveraged Asana to organize and manage tasks, tracking priority and progress in order to meet deadlines",
            "Utilized GitHub for version control to track, review, and update codebase",
            "Documented the codebase for future developers to maintain",
        ],
        skills: "React, Bootstrap, JavaScript, Git, CSS",
    },
    {
        company: "JC Drywall",
        title: "Freelance Web Developer",
        dates: "Dec 2020 - Mar 2022",
        desc: [
            "Led the development and deployment of responsive, static web pages using Bootstrap and React",
            "Designed UI/UX wireframes for desktop and mobile devices",
            "Improved company's web engagement, boosting website traffic and resulting in new leads",
            "Resolved issues arising from dependency and library updates to maintain optimal website performance",
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

const Experience = () => (
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
                    {jobsData.map((job) => (
                        <Tab
                            key={`Tab-${job.company}`}
                            _selected={desktopSelectedStyles}
                            _hover={desktopHoverStyles}
                        >
                            {job.company}
                        </Tab>
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
                    {jobsData.map((job) => (
                        <Tab
                            key={`Tab-${job.company}`}
                            _selected={mobileSelectedStyles}
                            _hover={mobileHoverStyles}
                        >
                            {job.company}
                        </Tab>
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

export default Experience;
