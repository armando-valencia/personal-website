import React from "react";
import { Tab } from "@chakra-ui/tabs";

const MobileExperienceTabs = ({ company, selectedStyle, hoverStyle }) => {
	//TODO: pass down the source (if mobile or desktop view) as props and change the
	// styling using a ternary operator to use the accurate styling

	// i.e. className=`text-gray-500 ${source == 'mobile' ? border-b-gray-500 : border-l-gray-500} flex`

	return (
		<Tab _selected={selectedStyle} _hover={hoverStyle}>
			{company}
		</Tab>
	);
};

export default MobileExperienceTabs;
