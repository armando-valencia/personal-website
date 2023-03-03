import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-primary text-secondary font-robo">
			<Nav />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
