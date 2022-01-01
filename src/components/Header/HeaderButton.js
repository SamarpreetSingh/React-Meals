import React, { useState, useContext } from "react";
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useEffect } from "react/cjs/react.development";

const HeaderButton = (props) => {
  const ctx = useContext(CartContext);
  const [bump, setBump] = useState(false);

  const btnClass =
    bump === true ? `${classes.button} ${classes.bump}` : `${classes.button}`;

  useEffect(() => {
    if (ctx.total === 0) {
      return;
    }
    setBump(true);
    const timer = setTimeout(() => setBump(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.total]);

  return (
    <button onClick={() => props.setCartActive(true)} className={btnClass}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>{ctx.total}</span>
    </button>
  );
};

export default HeaderButton;
