import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import ErrorPage from "./pages/errorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: <Shop />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;