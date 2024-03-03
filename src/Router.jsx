import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Shop from "./pages/shop/shop.jsx";
import ErrorPage from "./pages/errorPage";
import Header from "./modules/header/header.jsx";
import Footer from "./modules/footer/footer.jsx";

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
          // Component: {Shop},
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