import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/home.jsx";
import Shop from "./pages/shop/shop.jsx";
import ErrorPage from "./pages/errorPage";
import Header from "./modules/header/header.jsx";
import Footer from "./modules/footer/footer.jsx";
import { cartManager } from "./modules/cart/cart.jsx";

const Layout = () => {
  const [totalCartItems, setTotalCartItems] = useState(cartManager.getTotalItems());

  const getTotalCartItems= () => {
    setTotalCartItems(cartManager.getTotalItems());
    console.log("gettotalcartitems activated!!!")
  }

return (
  <>
    <Header totalCartItems={totalCartItems} getTotalCartItems={getTotalCartItems}/>
    <Outlet context={[getTotalCartItems]}/>
    <Footer />
  </>
)
}

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