import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="text-secondary font-barlow bg-primary/60 md:flex flex-col items-center justify-center">
			<Nav />
			<HomePage />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
