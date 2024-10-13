import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Wishes from "./pages/Wishes";
import Interactive from "./pages/Interactive";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<AnimatePresence mode="wait">
				<Routes
					location={location}
					key={location.key}
				>
					<Route
						path="/"
						element={<Welcome />}
					/>
					<Route
						path="/wishes"
						element={<Wishes />}
					/>
					<Route
						path="/interact"
						element={<Interactive />}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
