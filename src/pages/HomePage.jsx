import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Home from "../components/Home";

//TODO: reduce font size
const HomePage = () => (
	<div className="flex items-center justify-center">
		<div className="flex-none w-8 md:w-14"></div>
		<div className="grow max-w-xl">
			<div
				id="home"
				className="h-[90vh] flex items-center justify-center text-center"
			>
				<Home />
			</div>
			<div id="about" className="p-3">
				<About />
			</div>
			<div id="experience" className="p-3">
				<Experience />
			</div>
			<div id="contact" className="p-3">
				<Contact />
			</div>
		</div>
		<div className="flex-none w-14"></div>
	</div>
);

export default HomePage;
