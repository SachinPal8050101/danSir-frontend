import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./auth";

const RequiredAuth = ({children}) => {

    const user = useAuth();

    if (user) {
        return children
      } else {
        return <Navigate to="/LogIn" />
      }
    
};

export default RequiredAuth;
