import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import allActions from "../action";
import Loader from "../component/loader";
import { createAccountApi, forgetPasswordApi } from "../service";

const ForgetPassword = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(false);

  const [formValues, setFormValues] = useState({
    employee_email: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {}, []);

  const successApi = () => {
    dispatch(allActions.userActions.amountAddedSuccess(true));
    navigate("/ThankYou");
    setIsLoader(false)
  };

  const handleSubmit = () => {
    setIsLoader(true)
    forgetPasswordApi(formValues, successApi, (err) => {
      console.log(err.response.data);
      setIsLoader(false)
    });
  };

  return (
    isLoader? <Loader/>:
    <div className="container">
      <div className="content">
        {/* containet Left */}
        <div className="content_lft">
          {/* <h1>Welcome from Chips Shop!</h1>
          <p className="discrptn">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <img src="images/img_9.png" alt />{" "} */}
        </div>
        {/* containet Right */};
        <div className="content_rgt">
          <div className="register_sec">
            <h1>Forgot Password</h1>
            <ul>
              <li>
                <span>Enter E-mail ID</span>
                <input
                  name="employee_email"
                  type="text"
                  value={formValues.employee_email}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="User@gmail.com"
                />
              </li>
              <li>
                <a to="/ResetPassword">
                  {" "}
                  <input type="submit" onClick={()=>handleSubmit()}  defaultValue="Submit" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
