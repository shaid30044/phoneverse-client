import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import Phones from "../Pages/Phones";
import ErrorPage from "../Pages/ErrorPage";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Blog from "../Pages/Blog";
import ReadMore from "../Pages/ReadMore";

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
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <ReadMore />,
        loader: ({ params }) =>
          fetch(`http://localhost:5173/blog/${params.id}`),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
