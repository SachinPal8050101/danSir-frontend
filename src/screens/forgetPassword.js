import React, { useEffect } from "react"
import { createAccountApi } from "../service"



const ForgetPassword = ()=>{

useEffect(()=>{
    createAccountApi()
},[])

return(
        <div>
            <text>ForgetPassword</text>
        </div>
)

}

export default ForgetPassword;