import React, { useEffect, useState } from "react"
import { useLocation } from 'react-router';
import { Navigate } from "react-router-dom";

import queryString from 'query-string';
import { varifyEmailOfUser } from "../service";
import { useDispatch } from "react-redux";
import allActions from "../action";

const OtpScreen = (props)=>{
    const [isVarified,setVarified] = useState(false)
    const location = useLocation();
    let dispatch = useDispatch()
    const employee_email = queryString.parse(location.search).token


    const successApi=(res)=>{
        dispatch(allActions.userActions.userCreateAccount(res))
        setVarified(true)
    }

    const failcallApi=(err)=>{
        alert(err.response.data);
    }


    const handleApi=()=>{
        varifyEmailOfUser({employee_email:employee_email},successApi,failcallApi)
    }

 if (isVarified) {
    return <>
    <div>
        <text>now user is varified</text>
    </div>
    </>
  }else{
    return <>
    <div>
        <button onClick={handleApi}>Varify You mail </button>
    </div>
    </>
  }
}

export default OtpScreen;