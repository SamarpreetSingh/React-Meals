import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cart-context";

const cartReducer = (state, action) => {
  if (action.type === "increment") {
    const i = state.findIndex((item) => item.id === action.item.id);
    const newState = [...state];
    newState[i].value = state[i].value + 1;
    return newState;
  } else if (action.type === "decrement") {
    const i = state.findIndex((item) => item.id === action.item.id);
    const newState = [...state];
    newState[i].value = state[i].value - 1;
    if (newState[i].value <= 0) {
      newState.splice(i, 1);
    }
    return newState;
  } else if (action.type === "add") {
    const newState = state.filter((item) => item.id !== action.item.id);
    return [...newState, { ...action.item }];
  }
  return state;
};

function App() {
  const [cartActive, setCartActive] = useState(false);
  const [total, setTotal] = useState(0);
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    let t = 0;
    for (let i = 0; i < cartState.length; i++) {
      t += cartState[i].value;
    }
    setTotal(t);
  }, [cartState]);

  return (
    <div className="App">
      <CartContext.Provider value={{ total: total }}>
        <Header setCartActive={setCartActive} />
      </CartContext.Provider>
      {cartActive && (
        <Cart
          setCartActive={setCartActive}
          cartList={cartState}
          cartDispatch={cartDispatch}
        />
      )}
      <main>
        <Meals cartDispatch={cartDispatch} />
      </main>
    </div>
  );
}

export default App;
