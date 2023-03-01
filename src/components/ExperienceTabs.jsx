import { Tab } from "@chakra-ui/tabs";

const ExperienceTabs = ({ company, selectedStyle, hoverStyle }) => {
	return (
		<Tab _selected={selectedStyle} _hover={hoverStyle}>
			{company}
		</Tab>
	);
};

export default ExperienceTabs;
