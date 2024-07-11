import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import SingleProduct from "../pages/SingleProduct";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/all-product",
    element: <AllProducts />,
  },
  {
    path: "/add-cart",
    element: <Cart />,
  },
  {
    path: "/check-out",
    element: <Checkout />,
  },
  {
    path: "/single-product",
    element: <SingleProduct />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
]);

export default router;
