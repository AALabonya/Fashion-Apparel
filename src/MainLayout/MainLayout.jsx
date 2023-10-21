import { Outlet } from "react-router-dom";
import Navbar from "../components/Pages/Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div >
            <Navbar/>
          <div className="max-w-6xl mx-auto">
          <Outlet/>
          </div>
           <Footer/>
        </div>
    );
};

export default MainLayout;