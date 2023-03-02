import Experience from "../components/Experience";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => (
	<div className="px-6 pt-6 md:grid grid-cols-3">
		<div></div>
		<div className="block">
			<div id="home" className="py-6"></div>
			<div id="about" className="py-6 my-4">
				<About />

				<br />
				<br />

				<Skills />
			</div>
			<div id="experience" className="py-6 my-4">
				<Experience />
			</div>
			<div id="contact" className="py-6 my-4"></div>
		</div>
		<div></div>
	</div>
);

export default Home;
