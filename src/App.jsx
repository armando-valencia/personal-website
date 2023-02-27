import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="bg-primary text-secondary">
			<Nav />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
