import React from "react";
import MealSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = ({ cartDispatch }) => {
  return (
    <>
      <MealSummary />
      <AvailableMeals cartDispatch={cartDispatch} />
    </>
  );
};

export default Meals;
