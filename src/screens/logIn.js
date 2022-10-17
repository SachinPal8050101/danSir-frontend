import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInApi } from "../service";
import { setInLocalStorage } from "../utils/setGetAsyncStorage";
import { useDispatch } from "react-redux";
import allActions from "../action";
import Loader from "../component/loader";

const LogInAccount = () => {
  const [isLoader, setIsLoader] = useState(false);
  let dispatch = useDispatch();

  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    employee_email: "",
    password: "",
    isAdmin: false,
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const successApi = (res) => {
   
    console.log("Success");
    let token = res.data.data._id;
    dispatch(allActions.userActions.userCreateAccount(res));
    setInLocalStorage("Token", token);
    navigate("/");
    setIsLoader(false)
  };

  const failcallApi = (err) => {
    setIsLoader(false)
    alert(err.response.data);
  };

  const handleSubmit = () => {
    setIsLoader(true)
    logInApi(formValues, successApi, failcallApi);
  };

  return (
    isLoader ? <Loader /> : 
      <div className="container">
        <div className="content">
          {/* <div className="content_rgt"> */}
            <div className="login_sec">
              <h1>Log In</h1>
              <ul>
                <li>
                  <span>Email-ID</span>
                  <input
                    type="text"
                    name="employee_email"
                    value={formValues.employee_email}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Enter your email"
                  />
                </li>
                <li>
                  <span>Password</span>
                  <input
                    type="Password"
                    name="password"
                    value={formValues.password}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Enter your password"
                  />
                </li>
                <li>
                  <input type="checkbox" />
                  Remember Me
                </li>
                <li>
                  <input
                    type="submit"
                    onClick={() => handleSubmit()}
                    defaultValue="Log In"
                  />
                  <Link to="/forgetPassword" href>
                    Forgot Password
                  </Link>
                </li>
              </ul>
              <div className="addtnal_acnt">
                I do not have any account yet.
                <Link to="/create_acc">Create My Account Now !</Link>
              </div>
            </div>
          </div>
          {/* <div className="content_lft">
            <h1>Welcome from Chips Shop!</h1>
            <p className="discrptn">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.{" "}
            </p>
            <img src="images/img_9.png" alt />
          </div> */}
        {/* </div> */}
      </div>
  );
};

export default LogInAccount;
