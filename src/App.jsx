import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
	// TODO: Create experience and about components, then add to home page and remove routes so
	// we can slim down the routing. There should only be routes for home (/) and contact (/contact)
	return (
		<div className="bg-primary text-secondary font-robo">
			<Nav />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
