import React, { useRef } from "react";
import classes from "./MealItem.module.css";
import Input from "../../UI/Input/Input";

const MealItem = ({ meal, cartDispatch }) => {
  const mealPrice = `$${meal.price.toFixed(2)}`;
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    cartDispatch({
      type: "add",
      item: { ...meal, value: +amountInputRef.current.value },
    });
  };

  return (
    <li className={classes.item}>
      <div className={classes["meal"]}>
        <div className={classes["meal-title"]}>{meal.name}</div>
        <div className={classes["meal-description"]}>
          <i>{meal.description}</i>
        </div>
        <div className={classes["meal-price"]}>{mealPrice}</div>
      </div>
      <div className={classes.form}>
        <Input
          ref={amountInputRef}
          type="number"
          id="order-input"
          label="Amount"
          max="10"
          min="0"
          defaultValue="1"
        />
        <button
          onClick={submitHandler}
          className={classes.button}
          type="submit"
        >
          + Add
        </button>
      </div>
    </li>
  );
};

export default MealItem;
