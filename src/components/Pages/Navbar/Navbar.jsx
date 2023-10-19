import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {

    const{user , logOut}= useContext(AuthContext)
    
const handleSignOut =()=>{
    logOut()
    .then()
    .catch(error=>console.log(error))
}

const navLinks = <>

<li className="bg-pink-600 text-white rounded-lg"> <NavLink to="/">Home</NavLink></li>
<li className="bg-pink-600 text-white rounded-lg"> <NavLink to="/addProduct">Add Product</NavLink></li>
<li className="bg-pink-600 text-white rounded-lg"> <NavLink to="/myCart">My Cart</NavLink></li>
<li className="bg-pink-600 text-white rounded-lg"> <NavLink to="/register">Registration</NavLink></li>

</>
return (
<div className="lg:fixed lg:top-0 lg:w-full lg:bg-white lg:z-20 md:fixed md:top-0 md:w-full md:bg-white md:z-20">
  <div className="max-w-7xl flex mx-auto px-2">
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn px-1 py-1 bg-pink-600 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="dropdown-content lg:mt-3 z-[100] lg:p-2 shadow bg-pink-500 rounded-box">
            {navLinks}
          </ul>
        </div>
        <div>
        <Link className="bg-transparent"><img src="https://i.ibb.co/XDq7C8k/309867165-531981202263214-2459279338961586468-n.jpg" alt="" className=" w-8 lg:w-10 md:w-10 rounded-xl ml-7 mt-3"/></Link>
        <p className="text-pink-600 font-bold text-xs md:text-base ">Fashion Memoir</p>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:gap-2 lg:text-lg font-bold">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
      {
              user ? <>
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <div >
                  <button onClick={handleSignOut} className="btn bg-pink-500 font-bold flex text-white">
                    
                    <p className="text-center">{user?.displayName}</p> 
                    <p>LogOut</p>

                  </button>
                </div>
              </>

                :
                <Link to="/login" className="btn font-bold bg- bg-pink-700 text-white">Login</Link>
            }

            
      </div>
    </div>
  </div>
</div>

); 
       

    

};

export default Navbar;