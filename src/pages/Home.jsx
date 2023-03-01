import Experience from "../components/Experience";
import About from "../components/About";

const Home = () => (
	<div className="px-6 pt-6 md:grid grid-cols-3">
		<div></div>
		<div>
			<div id="home" className=""></div>
			<div id="about" className="">
				<About />
			</div>
			<div id="experience" className="">
				<Experience />
			</div>
		</div>
		<div></div>
	</div>
);

export default Home;
