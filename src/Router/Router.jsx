import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Pages/Home/Home";
import Register from "../components/Login/Register";
import Login from "../components/Login/Login";
import AddProducts from "../components/AddProduct/AddProducts";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import DynamicProducts from "../components/DynamicProducts/DynamicProducts";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import ShowDetails from "../components/ShowDetails/ShowDetails";
import MyCart from "../components/MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const Router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:()=> fetch("https://fashion-and-apparel-server-site-2zp91yqur.vercel.app/brands")
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/addProduct",
                element:<PrivateRoute><AddProducts/></PrivateRoute>
            },
            {
                path:"/myCart",
                element:<PrivateRoute><MyCart/></PrivateRoute>,
                loader:()=> fetch("https://fashion-and-apparel-server-site-2zp91yqur.vercel.app/cart")

            },
            {
                path:"/product/:name",
                element:<DynamicProducts/>,
                loader: ()=> fetch(`https://fashion-and-apparel-server-site-2zp91yqur.vercel.app/product`)
               
            },
            {
               path:"/showDetails/:id",
               element:<PrivateRoute><ShowDetails/></PrivateRoute>,
               loader: ()=> fetch(`https://fashion-and-apparel-server-site-2zp91yqur.vercel.app/product`)
            },
            {
                path:"/updateProduct/:id",
                element:<PrivateRoute><UpdateProduct/></PrivateRoute>,
                loader:({params}) =>fetch(`https://fashion-and-apparel-server-site-2zp91yqur.vercel.app/product/${params.id}`)
            }
        ]
    }
])


export default Router;