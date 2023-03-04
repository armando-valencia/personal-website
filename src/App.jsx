import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-primary text-secondary font-robo">
			<Nav />
			<HomePage />
			<Footer />
		</div>
	);
}

export default App;
