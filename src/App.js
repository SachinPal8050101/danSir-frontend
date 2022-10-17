import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInAccount from "./screens/logIn";
import CreateAccount from "./screens/createAccount";
import ShowAllData from "./screens/ShowAllData";
import AddAmountUser from "./screens/addAmountUser";
import OtpScreen from "./screens/OtpScreen";
import ForgetPassword from "./screens/forgetPassword";
import ThankYouScreen from "./screens/thankYouScreen";
import RequiredAuth from "./utils/requiredAuth";
import RequiredAuthForAdmin from "./utils/requiredAuthAdmin";

import RequiredAuthForAddAmount from "./utils/requiredAuthForAddAmount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "./utils/setGetAsyncStorage";
import allActions from "./action";
import { getUserData } from "./service";
import ForgotPasswordAfterVarify from "./screens/forgetPasswordAfterVarify";
import Loader from "./component/loader";

const App = () => {
  const [isAdmin,setIsAdmin] = useState(false)
  const [isLoader,setIsLoader] = useState(false)
  let dispatch = useDispatch();
  const [log,setLog]=useState(false)
  let isAdmin1 = useSelector(
    (state) => state.userReducers?.userDetailes?.data?.data?.isAdmin
  );

  const successApi=(res)=>{
    let token = res?.data?.data?._id
    console.log(res,token,res?.data)
    setIsAdmin(res?.data?.data?.isAdmin)
    dispatch(allActions.userActions.userCreateAccount(res))
    setIsLoader(false)
  }

const failcallApi=(err)=>{
    setIsLoader(false)
    alert("Something Went wrong !");
}

  useEffect(() => {
    let token = getFromLocalStorage('Token')
    token =  JSON.parse(token)
    if(token){
      setIsLoader(true)
    getUserData({employee_id: token},successApi,failcallApi)
    }
  }, []);

  return (
    isLoader?  <Loader />: <BrowserRouter basename="/">
     
    <Routes>
      {!isAdmin || !isAdmin1 ? (
        <Route
          path="/"
          element={
            <RequiredAuth>
              <AddAmountUser setLog={setLog} log={log} />
            </RequiredAuth>
          }
        />
      ) : (
        <Route
          path="/"
          element={
            <RequiredAuthForAdmin>
              <ShowAllData setLog={setLog} log={log} />
            </RequiredAuthForAdmin>
          }
        />
      )}
      <Route exact path="/LogIn" element={<LogInAccount />} />
      <Route path="/create_acc" element={<CreateAccount />} />
      <Route path="/create_acc/:id" element={<OtpScreen />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/forgetPassword/:id" element={<ForgotPasswordAfterVarify />} />
      <Route
        path="/ThankYou"
        element={
          <RequiredAuthForAddAmount>
            <ThankYouScreen />
          </RequiredAuthForAddAmount>
        }
      />
    </Routes>
  </BrowserRouter> 
   
  );
};

export default App;
