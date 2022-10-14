import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import isAmountSuccess from "./amountSuccess";

const RequiredAuthForAddAmount = ({children}) => {
  let isSuccess = useSelector((state) => state.userReducers?.amountAddedSuccess);


    const user = isAmountSuccess(isSuccess);

    if (user) {
        return children
      } else {
        return <Navigate to="/" />
      }
    
};

export default RequiredAuthForAddAmount;
