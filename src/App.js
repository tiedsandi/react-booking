import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes
} from "react-router-dom";

import Home from "./pages/Home/home.component";
import List from "./pages/Hotels/list.component";

import "./App.style.scss";
import Hotel from "./pages/HotelsDetails/hotel.component";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const App = () => {
	return <RouterProvider router={router} />;
};

function Root() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/hotels" element={<List />} />
			<Route path="/hotels/:id" element={<Hotel />} />
		</Routes>
	);
}

export default App;
