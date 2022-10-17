import React, { useEffect, useState } from "react"
import { useLocation } from 'react-router';
import { Navigate } from "react-router-dom";

import queryString from 'query-string';
import { varifyEmailOfUser } from "../service";
import { useDispatch } from "react-redux";
import allActions from "../action";
import Loader from "../component/loader";

const OtpScreen = (props)=>{
    const [isVarified,setVarified] = useState(false)
    const location = useLocation();
    const [isLoader, setIsLoader] = useState(false);
    let dispatch = useDispatch()
    const employee_email = queryString.parse(location.search).token


    const successApi=(res)=>{
        dispatch(allActions.userActions.userCreateAccount(res))
        setVarified(true)
        setIsLoader(false)
    }

    const failcallApi=(err)=>{
      setIsLoader(false)
        alert(err.response.data);
    }


    const handleApi=()=>{
      setIsLoader(true)
        varifyEmailOfUser({employee_email:employee_email},successApi,failcallApi)
    }

 if (isVarified) {
    return <>
    <div>
        <text>now user is varified</text>
    </div>
    </>
  }else{
    return isLoader ? <Loader />:<>
   <div className="container">
        <div className="content">
          {/* containet Left */}
          {/* <div className="content_lft">
            <h1>Welcome from Chips Shop!</h1>
            <p className="discrptn">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.{' '}
            </p>
            <img src="images/img_9.png" alt />{' '} */}
          </div>
          {/* containet Right */};
          <div className="content_rgt">
            <div className="register_sec">
              <h1>Varify Your Mail</h1>
              <ul>
                <li>
                  <a to="/ResetPassword">
                    {' '}
                    <input
                    onClick={handleApi}
                      type="submit"
                      defaultValue="Submit"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  }
}

export default OtpScreen;