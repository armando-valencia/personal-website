import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./components/Main";

function App() {
	return (
		<div>
			<Nav />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
