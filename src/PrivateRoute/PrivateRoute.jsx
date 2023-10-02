/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="text-5xl">Loading...</div>
    }
    if(!user?.email){
        return <Navigate to='/login'></Navigate>
    }
    
    
    return children;
};

export default PrivateRoute;