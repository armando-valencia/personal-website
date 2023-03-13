import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="text-quarternary font-nunito bg-black/80">
			<Nav />
			<HomePage />
			<Footer />
		</div>
	);
}

export default App;
