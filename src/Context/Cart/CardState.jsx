"use client";
import React, { useReducer } from "react";
import reducer from "./CartReducer";
import CartContext from "./CartContext";

const CartState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  const deleteToCart = (item) => {
    dispatch({
      type: "DELETE_TO_CART",
      payload: item,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <CartContext.Provider
      value={{ items: state, addToCart, deleteToCart, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;

/* 
add item to cart
delete item to cart
clear cart

*/
