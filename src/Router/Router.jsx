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


const Router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:()=> fetch("http://localhost:5000/brands")
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
                path:"/myCart",
                element:<MyCart/>,
                loader:()=> fetch("http://localhost:5000/cart")

            },
            {
                path:"/product/:name",
                element:<DynamicProducts/>,
                loader: ()=> fetch(`http://localhost:5000/product`)
               
            },
            {
               path:"/showDetails/:id",
               element:<ShowDetails/>,
               loader: ()=> fetch(`http://localhost:5000/product`)
            },
            {
                path:"/updateProduct/:id",
                element:<UpdateProduct/>,
                loader:({params}) =>fetch(`http://localhost:5000/product/${params.id}`)
            }
        ]
    }
])


export default Router;