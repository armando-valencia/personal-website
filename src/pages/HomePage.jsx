import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Home from "../components/Home";

const HomePage = () => (
	<div id="#" className="px-6 md:grid grid-cols-3">
		<div></div>
		<div className="grid grid-cols-1">
			<div id="home" className="h-screen flex items-center">
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
		<div></div>
	</div>
);

export default HomePage;
