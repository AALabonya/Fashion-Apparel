import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Pages/Home/Home";
import Register from "../components/Login/Register";
import Login from "../components/Login/Login";
import AddProducts from "../components/AddProduct/AddProducts";
import AddToCart from "../components/AddToCart/AddToCart";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import DynamicProducts from "../components/DynamicProducts/DynamicProducts";


const Router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
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
                element:<AddProducts/>
            },
            {
                path:"/addToCart",
                element:<AddToCart/>

            },
            {
                path:"/product/:id",
                element:<DynamicProducts/>,
                loader:({params}) => fetch(`http://localhost:5000/product/${params.id}`)
               
            }
        ]
    }
])


export default Router;