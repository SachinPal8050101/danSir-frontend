import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const AddAmountUser = ()=>{
    const [isUserVarified,setUserVarified]=useState(false)

 let isUserVarifiedUser = useSelector((state)=>state.userReducers?.userDetailes?.data?.data?.isUserVarified ?? false)

 useEffect(()=>{
   setUserVarified(isUserVarifiedUser)
 },[isUserVarifiedUser])

    return(
       <div>
        {isUserVarified?
          <div>UserVarified</div>
        : <div>Not UserVarified Please check your mail to varify your mail Id</div>}
       </div>
    )

}

export default AddAmountUser;