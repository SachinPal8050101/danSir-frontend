import React, {useState,setState} from 'react';
import '.././Style/CreateAcc.css'
import { createAccountApi } from '../service';
function CreateAccount() {
    
   const [formValues, setFormValues] = useState({
    employee_firstname: '',
    employee_lastname: '',
    employee_code: '',
    employee_email: '',
    password: '',
    confirmPassword: ''
   });

    const handleInputChange = (e) => {
        setFormValues(
            {...formValues,[e.target.name]:e.target.value}
        )
    }

    const successApi=()=>{
        console.log('Success')

    }

    const failcallApi=(err)=>{
        alert(err.response.data);
    }


    const handleSubmit  = () => {
        if(formValues.password==formValues.confirmPassword){
            delete formValues['confirmPassword'];
            createAccountApi(formValues,successApi,failcallApi)
        }else{
            alert("Password Does't match");
        }
     
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label">First Name </label>
                    <input className="form__input" type="text" value={formValues.employee_firstname} onChange = {handleInputChange} id="firstName" placeholder="First Name" name="employee_firstname"/>
                </div>
                <div className="lastname">
                    <label className="form__label">Last Name </label>
                    <input  type="text" name="employee_lastname" id="lastName" value={formValues.employee_lastname}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label">Email </label>
                    <input  type="email" name="employee_email" id="email" className="form__input" value={formValues.employee_email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="employee_code">
                    <label className="form__label" for="email">Employee Code </label>
                    <input  type="employee_code" name="employee_code" id="employee_code" className="form__input" value={formValues.employee_code} onChange = {(e) => handleInputChange(e)} placeholder="Employee Code"/>
                </div>
                <div className="password">
                    <label className="form__label" >Password </label>
                    <input className="form__input" name="password" type="password"  id="password" value={formValues.password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" >Confirm Password</label>
                    <input className="form__input" name="confirmPassword" type="password" id="confirmPassword" value={formValues.confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default CreateAccount;