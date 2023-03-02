import React from "react";
import { Tab } from "@chakra-ui/tabs";

const MobileExperienceTabs = ({ company, selectedStyle, hoverStyle }) => {
	return (
		<Tab _selected={selectedStyle} _hover={hoverStyle}>
			{company}
		</Tab>
	);
};

export default MobileExperienceTabs;
