import React from "react";
import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton setCartActive={props.setCartActive} />
      </header>
      <div className={classes["main-img"]}>
        <img src={mealImage} alt="delicious meal" />
      </div>
    </>
  );
};

export default Header;
