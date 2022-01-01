import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.data}>
        <h2>{props.item.name}</h2>
        <div className={classes.info}>
          <span className={classes.price}>${props.item.price}</span>
          <span className={classes.value}>x{props.item.value}</span>
        </div>
      </div>
      <div className={classes.buttons}>
        <button
          onClick={() =>
            props.cartDispatch({ type: "increment", item: props.item })
          }
          className={classes.button}
        >
          +
        </button>
        <button
          onClick={() =>
            props.cartDispatch({ type: "decrement", item: props.item })
          }
          className={classes.button}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
