import Experience from "../components/Experience";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => (
	<div className="px-6 pt-6 md:grid grid-cols-3">
		<div></div>
		<div>
			<div id="home" className=""></div>
			<div id="about" className="">
				<div className="flex justify-center m-3">
					<h1 className="text-3xl">01. About</h1>
				</div>
				<About />
			</div>
			<div id="experience" className="">
				<div className="flex justify-center m-3">
					<h1 className="text-3xl">02. Experience</h1>
				</div>
				<Experience />
			</div>
			<div id="skills" className="pt-4">
				<div className="flex justify-center m-3">
					<h1 className="text-3xl">03. Skills</h1>
				</div>
				<Skills />
			</div>
		</div>
		<div></div>
	</div>
);

export default Home;
