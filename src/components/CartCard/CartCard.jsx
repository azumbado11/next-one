"use client";
import React, { useContext } from "react";
import "./CartCard.css";
import { BinIcon } from "../../constants/index";
import CartContext from "../../Context/Cart/CartContext";
const CartCard = ({ img, name, category, price, id, quantity }) => {
  const { deleteToCart } = useContext(CartContext);
  return (
    <article className="cart-card__container">
      <img src={img} className="img" alt={`${name} Image`} />
      <section className="cart-card-text__container">
        <div className="cart-card-header__container">
          <h4>{name}</h4>
          <h4>{`$${price}`}</h4>
        </div>
        <p>{category}</p>
        {quantity > 1 ? <p>Quantity: {quantity}</p> : null}
        <section className="cart-card-btn__container">
          <button
            className="cart-card-button"
            onClick={() => {
              deleteToCart(id);
            }}
          >
            {BinIcon}
          </button>
        </section>
      </section>
    </article>
  );
};

export default CartCard;
