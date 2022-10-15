import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import allActions from "../action";
import { createAccountApi, forgetPasswordApi } from "../service"



const ForgetPassword = ()=>{
    let dispatch = useDispatch()
    let navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        employee_email: '',
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
    forgetPasswordApi(formValues,successApi,(err)=>{console.log(err.response.data)})
}

return(
    <div className="form">
    <div className="form-body">
        <div className="email">
            <label className="form__label">Email </label>
            <input  type="email" name="employee_email" id="email" className="form__input" value={formValues.employee_email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
        </div>
        <div className="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
               
            </div>
    </div>
</div>
)

}

export default ForgetPassword;