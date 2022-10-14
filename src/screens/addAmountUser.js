import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import allActions from "../action";
import { getTotalAmountOfUser, sendAmoundOfPurchased } from "../service";
import { getFromLocalStorage } from "../utils/setGetAsyncStorage";

const AddAmountUser = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let userData = useSelector(
    (state) => state.userReducers?.userDetailes?.data?.data
  );
  let totalAmount = useSelector((state) => state.userReducers?.totalAmount);
  let token = getFromLocalStorage("Token");
  token = JSON.parse(token);

  let date = new Date();

  const [amount, setAmount] = useState(0);

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const successApi = (res) => {
    dispatch(allActions.userActions.amountAddedSuccess(true))
    getTotalAmountOfUser(
      { employee_id: token },
      (res) =>
        dispatch(
          allActions.userActions.userTotalAmountIs(res.data.data.totalAmount)
        ),
      () => {}
    );
    navigate('/ThankYou');
  };

  const failcallApi = (err) => {
    alert(err.response.data);
  };

  useEffect(() => {
    let token = getFromLocalStorage("Token");
    token = JSON.parse(token);
    console.log("sdfsd", totalAmount);
    if (token) {
      getTotalAmountOfUser(
        { employee_id: token },
        (res) =>
          dispatch(
            allActions.userActions.userTotalAmountIs(res.data.data.totalAmount)
          ),
        () => {}
      );
    }
  }, [userData]);

  const handleSubmit = () => {
    // logInApi(formValues,successApi,failcallApi)
    let formVal = {
      employee_id: userData?._id,
      employee_name:
        userData?.employee_firstname + " " + userData?.employee_lastname,
      employee_code: userData?.employee_code,
      amount: { date: date.getDate(), puchaseAmount: Number(amount) },
    };
    sendAmoundOfPurchased(formVal, successApi, failcallApi);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="password">
          <label className="form__label">Purcased Amount </label>
          <input
            className="form__input"
            name="amount"
            id="password"
            value={amount}
            onChange={(e) => handleInputChange(e)}
            placeholder="Amount"
          />
        </div>
        <text>{userData?.employee_firstname + "   " ?? ""}</text>
        <text>{totalAmount + "   " ?? ""}</text>
      </div>
      <div className="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default AddAmountUser;
