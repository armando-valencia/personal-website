import Experience from "../components/Experience";
import About from "../components/About";

const Home = () => (
	<div className="px-6 pt-6 md:grid grid-cols-3">
		<div></div>
		<div className="block">
			<div id="home" className="absolute top-0"></div>
			<div id="about" className="pt-3">
				<About />
			</div>
			<div id="experience" className="pt-3">
				<Experience />
			</div>
			<div id="contact" className="pt-3"></div>
		</div>
		<div></div>
	</div>
);

export default Home;
