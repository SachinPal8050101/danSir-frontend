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
import isAdminAcc from "./utils/checkAdmin";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import allActions from "./action";


const App = () => {
  const isAdmin = isAdminAcc();
  const dispatch = useDispatch()


  const currentUser = useSelector(state => state.userReducers)

  useEffect(()=>{
    dispatch(allActions.userActions.increment())

    console.log("currentUser",currentUser)

  },[])


  console.log('seedklctor',currentUser)

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
