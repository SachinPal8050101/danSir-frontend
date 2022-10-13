import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuthAdmin from "./useAuthAdmin";

const RequiredAuthForAdmin = ({ children }) => {
  let user = useAuthAdmin();
  if (user) {
    return children;
  } else {
    return <Navigate to="/LogIn" />;
  }
};

export default RequiredAuthForAdmin;
