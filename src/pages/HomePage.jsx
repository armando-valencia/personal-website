import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Home from "../components/Home";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";

const pages = [
	{ name: "home", component: <Home /> },
	{ name: "about", component: <About /> },
	{ name: "experience", component: <Experience /> },
	{ name: "contact", component: <Contact /> },
];

const HomePage = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<div className="flex items-center justify-center">
			<div className="flex-none w-8 md:w-14"></div>
			<div className="grow max-w-3xl space-y-32 md:space-y-20">
				{pages.map((page, idx) => (
					<div
						id={page.name}
						className={`${
							page.name == "home" ? "" : " py-10md:pt-52 my-4"
						}`}
					>
						<SectionHeader
							key={`SectionHeader-${page.name}-${idx}`}
							name={page.name}
							idx={idx}
						/>
						<SectionContainer
							key={`SectionContainer-${page.name}-${idx}`}
							name={page.name}
							component={page.component}
						/>
					</div>
				))}
			</div>
			<div className="flex-none w-8 md:w-14"></div>
		</div>
	);
};

export default HomePage;
