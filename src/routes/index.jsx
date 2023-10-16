import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import NotFound from "../pages/error/not-found";
import Layouts from "../layouts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
