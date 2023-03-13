import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Home from "../components/Home";

const HomePage = () => (
	<div className="flex items-center justify-center">
		<div className="flex-none w-8 md:w-14"></div>
		<div className="grow max-w-3xl space-y-32">
			<div
				id="home"
				className="h-[95vh] flex items-center justify-center text-center"
			>
				<Home />
			</div>
			<div
				id="about"
				className="h-screen flex items-center justify-center"
			>
				<About />
			</div>
			<div
				id="experience"
				className="h-screen flex items-center justify-center"
			>
				<Experience />
			</div>
			<div
				id="contact"
				className="h-screen flex items-center justify-center"
			>
				<Contact />
			</div>
		</div>
		<div className="flex-none w-8 md:w-14"></div>
	</div>
);

export default HomePage;
