import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { div } from "framer-motion/client";

const Welcome = lazy(() => import("./pages/Welcome"));
const Wishes = lazy(() => import("./pages/Wishes"));
const Interactive = lazy(() => import("./pages/Interactive"));

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<AnimatePresence mode="wait">
				<Suspense fallback={<div>Loading...</div>}>
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
				</Suspense>
			</AnimatePresence>
		</div>
	);
}

export default App;
