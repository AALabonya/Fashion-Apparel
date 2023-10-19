/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location =useLocation()
 
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
     
    if(user){
        return children;
    }
     
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;