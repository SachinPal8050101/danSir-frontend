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

const handleSubmit  = () => {
    if(formValues.newPassword==formValues.confirmPassword){
        forgetPasswordApiAfterVarify({...formValues,employee_email:employee_email},successApi,(err)=>{console.log(err.response.data)})
    }
   
}

return(
    <div className="form">
    <div className="form-body">
    <div className="password">
                    <label className="form__label" >Password </label>
                    <input className="form__input" name="newPassword" type="password"  id="password" value={formValues.newPassword} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" >Confirm Password</label>
                    <input className="form__input" name="confirmPassword" type="password" id="confirmPassword" value={formValues.confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
        <div className="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
               
            </div>
    </div>
</div>
)

}

export default ForgotPasswordAfterVarify;