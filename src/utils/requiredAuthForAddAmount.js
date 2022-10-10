import React from "react";
import { Navigate } from "react-router-dom";
import isAmountSuccess from "./amountSuccess";
import useAuthAdmin from "./useAuthAdmin";

const RequiredAuthForAddAmount = ({children}) => {

    const user = isAmountSuccess();

    if (user) {
        return children
      } else {
        return <Navigate to="/add_amount" />
      }
    
};

export default RequiredAuthForAddAmount;
