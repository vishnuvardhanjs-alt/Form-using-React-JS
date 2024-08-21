import React from "react";
import ReactDOM from 'react-dom';
import EmployeeForm from "./Employee";



function Hello(){
  return(
    <>
    <EmployeeForm/>
    </>
  )
}
ReactDOM.render(<Hello/>,document.getElementById("root"));
