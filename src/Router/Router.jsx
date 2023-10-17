import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Pages/Home/Home";
import Register from "../components/Login/Register";
import Login from "../components/Login/Login";


const Router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
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
            }
        ]
    }
])


export default Router;