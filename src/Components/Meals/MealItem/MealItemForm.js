import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "../MealItem/MealItemForm.module.css";
const MealItemForm = (props) => {
  const [AmountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enterAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.OnAddToCart(enterAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button className={classes.button}>+ ADD</button>
      {!AmountIsValid && <p>Pls enter a valid amount (1-5).</p>}
    </form>
  );
};
export default MealItemForm;
