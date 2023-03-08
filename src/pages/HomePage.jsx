import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Home from "../components/Home";

//TODO: reduce font size
const HomePage = () => (
	<div className="flex items-center justify-center">
		<div className="flex-none w-8 md:w-14"></div>
		<div className="grow max-w-5xl">
			<div id="home" className="h-screen flex items-center text-center">
				<Home />
			</div>
			<div id="about" className="pt-3">
				<About />
			</div>
			<div id="experience" className="pt-3">
				<Experience />
			</div>
			<div id="contact" className="pt-3">
				<Contact />
			</div>
		</div>
		<div className="flex-none w-14"></div>
	</div>
);

export default HomePage;
