import React, { useEffect, useState } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => props.setCartActive(false)}
    ></div>
  );
};

const Modal = (props) => {
  return (
    <div className={classes.cart}>
      <div className="items">
        {props.cartList.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            cartDispatch={props.cartDispatch}
          />
        ))}
      </div>
      <div className={classes["amount"]}>
        <span className={classes["total-amount"]}>Total Amount</span>
        <span className={classes["total"]}>${props.total}</span>
      </div>
      <div className={classes.buttons}>
        <button
          className={`${classes.btn} ${classes.close}`}
          onClick={props.cancelHandler}
        >
          Close
        </button>
        <button
          className={`${classes.btn} ${classes.order}`}
          onClick={() => console.log("Ordering...")}
        >
          Order
        </button>
      </div>
    </div>
  );
};

const Cart = (props) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < props.cartList.length; i++) {
      total += props.cartList[i].value * props.cartList[i].price;
    }
    setTotal(total.toFixed(2));
  }, [props.cartList]);

  const cancelHandler = (e) => {
    e.preventDefault();
    props.setCartActive(false);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setCartActive={props.setCartActive} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <Modal
          setCartActive={props.setCartActive}
          cartList={props.cartList}
          cartDispatch={props.cartDispatch}
          total={total}
          cancelHandler={cancelHandler}
        />,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Cart;
