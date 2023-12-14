import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import Phones from "../Pages/Phones";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/phones",
        element: <Phones />,
      },
    ],
  },
]);

export default router;
