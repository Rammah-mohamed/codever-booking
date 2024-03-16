import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";

const App = () => {
	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/hotels' element={<Hotels />} />
					<Route path='/hotels/:id' element={<Hotel />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
