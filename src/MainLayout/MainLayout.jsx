import { Outlet } from "react-router-dom";
import Navbar from "../components/Pages/Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default MainLayout;