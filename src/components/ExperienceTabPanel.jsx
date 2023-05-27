import { TabPanel } from "@chakra-ui/tabs";

const ExperienceTabPanel = ({ title, dates, desc, skills, source }) => (
	<TabPanel className="m-2">
		<h1 className="text-quarternary text-xl md:text-2xl">{title}</h1>
		<h3 className="text-gray-400 text-lg font-light italic">{dates}</h3>

		<ul className="text-quarternary text-base md:text-lg list-disc py-1">
			{desc.map((descItem, idx) => (
				<li key={idx}>{descItem}</li>
			))}
		</ul>
		<div
			className={`${
				source == "mobile"
					? "text-secondary pt-2"
					: "text-secondary text-base md:text-lg"
			}`}
		>
			{skills}
		</div>
	</TabPanel>
);

export default ExperienceTabPanel;
