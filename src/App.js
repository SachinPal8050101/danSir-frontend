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
import { useEffect } from "react";
import { getFromLocalStorage } from "./utils/setGetAsyncStorage";
import allActions from "./action";
import { getUserData } from "./service";

const App = () => {
  let dispatch = useDispatch();
  let isAdmin = useSelector(
    (state) => state.userReducers?.userDetailes?.data?.data?.isAdmin
  );

  const successApi=(res)=>{
    let token = res.data.data._id
    console.log(res,token,res.data)
    dispatch(allActions.userActions.userCreateAccount(res))
  }

const failcallApi=(err)=>{
    alert("Something Went wrong !");
}

  useEffect(() => {
    let token = getFromLocalStorage('Token')
    token =  JSON.parse(token)
    if(token){
    getUserData({employee_id: token},successApi,failcallApi)
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {!isAdmin ? (
          <Route
            path="/"
            element={
              <RequiredAuth>
                <AddAmountUser />
              </RequiredAuth>
            }
          />
        ) : (
          <Route
            path="/"
            element={
              <RequiredAuthForAdmin>
                <ShowAllData />
              </RequiredAuthForAdmin>
            }
          />
        )}
        <Route exact path="/LogIn" element={<LogInAccount />} />
        <Route path="/create_acc" element={<CreateAccount />} />
        <Route path="/create_acc/:id" element={<OtpScreen />} />
        <Route path="/forgetPassword/:id" element={<ForgetPassword />} />
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
