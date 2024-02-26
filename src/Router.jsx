import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import ErrorPage from "./pages/errorPage";
import Header from "./modules/header";
import Footer from "./modules/footer";

const Layout = () =>
  <>
    <Header />
    <Outlet />
    <Footer />
  </>

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, //defines default child route at "/"
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
      ]
    },
    
  ]);

  return (
      <RouterProvider router={router} />
  )
};

export default Router;