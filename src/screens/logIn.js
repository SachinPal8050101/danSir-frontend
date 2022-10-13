import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { logInApi } from "../service";
import '.././Style/CreateAcc.css'
import { setInLocalStorage } from "../utils/setGetAsyncStorage";

const LogInAccount = ()=>{

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        employee_email: '',
        password: '',
       });
    
        const handleInputChange = (e) => {
            setFormValues(
                {...formValues,[e.target.name]:e.target.value}
            )
        }

        const successApi=(res)=>{
            console.log('Success')
            let token = res.data.data._id
            setInLocalStorage('Token',token)
            navigate('/');
        }
    
        const failcallApi=(err)=>{
            alert(err.response.data);
        }

        const handleSubmit  = () => {
            logInApi(formValues,successApi,failcallApi)         
        }

    return(
        <div className="form">
            <div className="form-body">
                <div className="email">
                    <label className="form__label">Email </label>
                    <input  type="email" name="employee_email" id="email" className="form__input" value={formValues.employee_email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" >Password </label>
                    <input className="form__input" name="password" type="password"  id="password" value={formValues.password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>
            <div className="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
    )

}

export default LogInAccount;