import React, { useEffect, useState } from "react"
import { useLocation } from 'react-router';
import { Navigate } from "react-router-dom";

import queryString from 'query-string';
import { varifyEmailOfUser } from "../service";
import { useDispatch } from "react-redux";
import allActions from "../action";
import { setInLocalStorage } from "../utils/setGetAsyncStorage";


const OtpScreen = (props)=>{
    const [isVarified,setVarified] = useState(false)
    const location = useLocation();
    let dispatch = useDispatch()
    const employee_email = queryString.parse(location.search).token

    useEffect(()=>{       
        varifyEmailOfUser({employee_email:employee_email},successApi,failcallApi)
    },[])


    const successApi=(res)=>{
        console.log('Success',res)
        dispatch(allActions.userActions.userCreateAccount(res))
        setVarified(true)
    }

    const failcallApi=(err)=>{
        alert(err.response.data);
    }

 if (isVarified) {
    return <Navigate to="/" />;
  } 
}

export default OtpScreen;