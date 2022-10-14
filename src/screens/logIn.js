import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { logInApi } from "../service";
import '.././Style/CreateAcc.css'
import { setInLocalStorage } from "../utils/setGetAsyncStorage";

const LogInAccount = ()=>{
    const [isChecked, setIsChecked] = useState(false);


    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        employee_email: '',
        password: '',
        isAdmin: false
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

        const handleOnChange = () => {
            setIsChecked(!isChecked);
            setFormValues({...formValues,isAdmin: !isChecked})
          };

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
                <div className="password">
                    <label className="form__label" >Is Admin </label>
                    <input type="checkbox" id="topping" name="topping" value={isChecked} checked={isChecked} onChange={handleOnChange} />
                </div>
            </div>
            <div className="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
    )

}

export default LogInAccount;