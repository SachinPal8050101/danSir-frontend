import React from "react";
import { Navigate } from "react-router-dom";
import isOtpSend from "./isOtp";
import useAuthAdmin from "./useAuthAdmin";

const RequiredAuthForAdmin = ({children}) => {

    const user = isOtpSend();

    if (user) {
        return children
      } else {
        return <Navigate to="/" />
      }
    
};

export default RequiredAuthForAdmin;
