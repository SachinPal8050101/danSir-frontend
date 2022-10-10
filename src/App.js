import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInAccount from "./screens/logIn";
import CreateAccount from "./screens/createAccount";
import ShowAllData from "./screens/ShowAllData";
import AddAmountUser from "./screens/addAmountUser";
import ThankYouScreen from "./screens/thankYouScreen";
import RequiredAuth from "./utils/requiredAuth";
import RequiredAuthForAdmin from "./utils/requiredAuthAdmin";
import RequiredAuthForAddAmount from "./utils/requiredAuthForAddAmount";
import isAdminAcc from "./utils/checkAdmin";

const App = () => {
  const isAdmin = isAdminAcc();
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
