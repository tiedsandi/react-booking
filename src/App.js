import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/list/List";

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

function Root() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<List />} />
    </Routes>
  );
}

export default App