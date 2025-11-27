import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import BusinessLogin from "../Pages/BusinessLogin";
import BusinessRegister from "../Pages/BusinessRegister";
import MainLayout from "../components/Layouts/MainLayout";
import Home from "../Pages/Home";
import AmazoneHome from "../Pages/AmazoneHome";
import AmazoneWomen from "../Pages/AmazoneWomen";
import ProductView from "../Pages/ProductView";
import ProductCart from "../Pages/ProductCart";
import Checkout from "../Pages/Checkout";
import MyOrders from "../Pages/MyOrders";





const router = createBrowserRouter([

    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/business-login",
        element: <BusinessLogin />,
    },
    {
        path: "/business-register",
        element: <BusinessRegister />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Home />

            },
            {
                path: "/amazone-home",
                element: <AmazoneHome />
            },
            {
                path: "/amazon-women",
                element: <AmazoneWomen />
            },
            {
                path: "/product-view/:id",
                element: <ProductView />

            },
            {
                path: "/product-cart",
                element: <ProductCart />
            }
            ,

            {
                path: "/orders",
                element: <MyOrders />
            }

        ]
    },
    {
        path: "/checkout",
        element: <Checkout />
    },

]);

export default router;