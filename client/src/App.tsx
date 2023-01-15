import { Navbar } from "./components/Navbar";

import { Home } from "./pages/Home";

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Home />
			</div>
		</>
	);
}

export default App;
