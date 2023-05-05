import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import MobileNav from "./components/MobileNav";

function App() {
	return (
		<div className="text-secondary font-barlow bg-primary/50 md:flex flex-col items-center justify-center">
			<Nav />
			<HomePage />
			<MobileNav />
		</div>
	);
}

export default App;
