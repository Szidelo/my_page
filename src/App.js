import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
// import ProjectList from "./Components/ProjectList/ProjectList";
import Projects from "./Pages/Projects";
import ContactPage from "./Pages/ContactPage";
import Roots from "./Roots";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Roots />,
			children: [
				{
					path: "/",
					element: <Homepage />,
					errorElement: <NotFound />,
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "*",
					element: <NotFound />,
				},
				{
					path: "/projects",
					element: <Projects />,
				},
				{
					path: "/Contact",
					element: <ContactPage />,
				},
			],
		},
	]);

	return (
		<div className="d-flex flex-column">
			<Header />
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
