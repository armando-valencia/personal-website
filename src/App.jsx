import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import MobileNav from "./components/MobileNav";

function App() {
	return (
		<div className="text-secondary font-barlow bg-gradient-to-b from-neutral-900/10 to-gray-800 md:flex flex-col items-center justify-center">
			<Nav />
			<HomePage />
			<MobileNav />
		</div>
	);
}

export default App;
