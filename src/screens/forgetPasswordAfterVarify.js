import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import allActions from "../action";
import { createAccountApi, forgetPasswordApi, forgetPasswordApiAfterVarify } from "../service"
import queryString from 'query-string';




const ForgotPasswordAfterVarify = ()=>{
    let dispatch = useDispatch()
    let navigate = useNavigate();
    const location = useLocation();
    const employee_email = queryString.parse(location.search).token

    const [formValues, setFormValues] = useState({
        newPassword: '',
        confirmPassword: ''
       });

    
    const handleInputChange = (e) => {
        setFormValues(
            {...formValues,[e.target.name]:e.target.value}
        )
    }


useEffect(()=>{
    
},[])

const successApi=()=>{
    dispatch(allActions.userActions.amountAddedSuccess(true))
    navigate('/ThankYou');

}

const handleSubmit  = (e) => {
    e.preventDefault();
    if(formValues.newPassword==formValues.confirmPassword){
        forgetPasswordApiAfterVarify({...formValues,employee_email:employee_email},successApi,(err)=>{console.log(err.response.data)})
    }
   
}

return(
<>
<div className="container">
<div className="content">
<div className="content_rgt">
 <div className="register_sec">
   <h1>Reset Password</h1>
   <form onSubmit={handleSubmit}>
   <ul>
     <li>
       <span>Enter New Password</span>
       <input type="text" name="newPassword" placeholder="Enter your new password" value={formValues.newPassword} onChange = {(e) => handleInputChange(e)}  />
     </li>
     <li>
       <span>Confirm Password</span>
       <input type="text" placeholder="Enter your password again" name="confirmPassword" value={formValues.confirmPassword} onChange = {(e) => handleInputChange(e)} />
     </li>
     <li>
       <input type="submit"  defaultValue="Submit"  />
     </li>
   </ul>
   </form>
 </div>
</div>
<div className="content_lft">
 <h1>Welcome from Chips Shop!</h1>
 <p className="discrptn">
   There are many variations of passages of Lorem Ipsum available, but the
   majority have suffered alteration in some form, by injected humour, or
   randomised words which don't look even slightly believable. If you are
   going to use a passage of Lorem Ipsum, you need to be sure there isn't
   anything embarrassing hidden in the middle of text.{" "}
 </p>
 <img src="images/img_9.png" alt />{" "}
</div>
</div>
</div>
</>
)

}

export default ForgotPasswordAfterVarify;