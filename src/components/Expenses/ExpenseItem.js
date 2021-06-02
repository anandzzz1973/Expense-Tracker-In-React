import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // React hook's , first element is current state or seoncd is function to upate curretn state
  // const [title,setTitle] = useState(props.title);

  // console.log("this is only tesing bro...")

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   // console.log("clicked!!!");
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
