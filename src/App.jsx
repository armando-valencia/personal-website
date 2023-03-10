import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-primary text-quarternary font-nunito">
			<div className="border-l-4 border-r-4 border-[#4700f7]">
				<div className="border-l-4 border-r-4 border-[#fff]">
					<Nav />
					<HomePage />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
