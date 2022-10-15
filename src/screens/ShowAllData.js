import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import allActions from "../action";
import { getMoneyFromUser, showAllAdminData } from "../service";
import { removeFromLocalStorage } from "../utils/setGetAsyncStorage";

function ShowAllData(props) {
  const [showData, setShowData] = useState([]);
  let dispatch = useDispatch()

  const successApi = (res) => {
    setShowData(res.data.result);
  };

  const failcallApi = (err) => {
    alert(err.response.data);
  };

  const handleClick = (employee_id, employee_name) => {
    var answer = prompt(`Please Enter ${employee_name} Amount`);
    if(answer !== parseInt(answer, 10).toString()) {
      alert("Please enter only numbers!");
      answer = prompt(`Please Enter ${employee_name} Amount`);
    }
    if(answer>0){
        getMoneyFromUser({employee_id:employee_id,get_money:Number(answer)},()=>{ showAllAdminData(successApi,failcallApi)},(err)=>{alert(err.response.data);})
    }
  };

  useEffect(() => {
    showAllAdminData(successApi, failcallApi);
  }, []);

  const logOut=()=>{
    removeFromLocalStorage('Token')
    props.setLog(!props.log)
    // props.setIsAdmin1(false)
   dispatch(allActions.userActions.setIsAdminInRedux(false)) 
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>S NO.</th>
            <th>Employee Name </th>
            <th>Employee Code</th>
            <th>Total Amount To Pay</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.employee_name}</td>
                <td>{data.employee_code}</td>
                <td>{data.totalAmount}</td>
                <button
                  onClick={() =>
                    handleClick(data.employee_id, data.employee_name)
                  }
                >
                  Pay
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
                  onClick={logOut}
                >
                  Log Out 
                </button>
    </div>
  );
}

export default ShowAllData;
