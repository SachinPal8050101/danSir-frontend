import React from "react";
import { Navigate } from "react-router-dom";
import useAuthAdmin from "./useAuthAdmin";

const RequiredAuthForAdmin = ({children}) => {

    const user = useAuthAdmin();

    if (user) {
        return children
      } else {
        return <Navigate to="/LogIn" />
      }
    
};

export default RequiredAuthForAdmin;
