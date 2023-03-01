import { TabPanel } from "@chakra-ui/tabs";

const ExperienceTabPanel = ({ title, dates, desc, skills, source }) => {
	return (
		<TabPanel className="m-2">
			<h1 className="tab-panel__title">{title}</h1>
			<h3 className="tab-panel__dates">{dates}</h3>

			<ul className="tab-panel__desc">
				{desc.map((descItem, idx) => (
					<li key={idx}>{descItem}</li>
				))}
			</ul>
			<div
				className={`${
					source == "mobile"
						? "tab-panel__skills-mobile"
						: "tab-panel__skills"
				}`}
			>
				{skills}
			</div>
		</TabPanel>
	);
};

export default ExperienceTabPanel;
