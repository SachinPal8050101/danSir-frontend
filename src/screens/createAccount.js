import React, { useState, setState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import allActions from "../action";
import Loader from "../component/loader";
import { createAccountApi } from "../service";
import { setInLocalStorage } from "../utils/setGetAsyncStorage";

function CreateAccount() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [isLoader, setIsLoader] = useState(false);

  const [formValues, setFormValues] = useState({
    employee_firstname: "",
    employee_lastname: "",
    employee_code: "",
    employee_email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const successApi = (res) => {
    console.log("Success");
    let token = res.data.data._id;
    console.log(res, token, res.data);
    dispatch(allActions.userActions.userCreateAccount(res));
    setInLocalStorage("Token", token);
    navigate("/");
    setIsLoader(false)
  };

  const failcallApi = (err) => {
    alert(err.response.data);
    setIsLoader(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.password == formValues.confirmPassword) {
      setIsLoader(true)
      createAccountApi(formValues, successApi, failcallApi);
    } else {
      alert("Password Does't match");
    }
  };

  const handlePrevent = (e) => {
    e.preventDefault();
  };

  return (
    isLoader?<Loader/>:
      <div className="container">
        <div className="content">
          {/* <div className="content_rgt"> */}
            <div className="register_sec">
              <form onSubmit={handleSubmit}>
                <h1>Welcome from Chips Shop!</h1>
                <ul>
                  <li>
                    <span>Employee Code</span>
                    <input
                      type="text"
                      name="employee_code"
                      value={formValues.employee_code}
                      placeholder="Enter your Employee Code"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </li>
                  <li>
                    <span>Password</span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formValues.password}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </li>
                  <li>
                    <span>Confirm Password</span>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Enter your confirm password"
                      value={formValues.confirmPassword}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </li>
                  <li>
                    <span>Email</span>
                    <input
                      type="text"
                      name="employee_email"
                      value={formValues.employee_email}
                      placeholder="Enter your email"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </li>
                  <li>
                    <span>First Name</span>
                    <input
                      type="text"
                      name="employee_firstname"
                      placeholder="Enter your first name"
                      value={formValues.employee_firstname}
                      onChange={handleInputChange}
                      required
                    />
                  </li>
                  <li>
                    <span>Last Name</span>
                    <input
                      type="text"
                      name="employee_lastname"
                      value={formValues.employee_lastname}
                      placeholder="Enter your last name"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </li>
                  <li>
                    <input type="checkbox" name="checkbox" />I agree to Term
                    &amp; Conditions
                  </li>
                  <li>
                    <input type="submit" defaultValue="Register" />
                  </li>
                </ul>
              </form>
              <div className="addtnal_acnt">
                I already have an account.
                <Link to="/login">Login My Account !</Link>
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
            <img src="images/img_9.png" alt />{" "}
          </div> */}
        {/* </div> */}
      </div>
  );
}

export default CreateAccount;
