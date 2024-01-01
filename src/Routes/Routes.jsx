import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import Phones from "../Pages/Phones";
import ErrorPage from "../Pages/ErrorPage";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Blog from "../Pages/Blog";
import ReadMore from "../Pages/ReadMore";
import Phone from "../Pages/Phone";

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
        path: "/phones/:id",
        element: <Phone />,
        loader: ({ params }) =>
          fetch(`http://localhost:5173/phones/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogs/:id",
        element: <ReadMore />,
        loader: ({ params }) =>
          fetch(`https://phone-verse-server.vercel.app/blogs/${params.id}`),
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
