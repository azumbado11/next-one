"use client";
import styles from "./page.module.css";
import { CustomButton, CartCard } from "../../components/index";
import CartContext from "../../Context/Cart/CartContext";
import { useContext } from "react";
import Link from "next/link";
import { calcTotal, calcTaxes, calcBill } from "../../utils/index";

const CartContent = ({ items, clearCart }) => {
  const total = calcTotal(items);
  const tax = calcTaxes(total);
  const delivery = 4.99;
  const bill = calcBill(total, tax, delivery);

  return (
    <>
      <section className={styles.cartItems__container}>
        <h1>Your Bag</h1>
        <p>
          Total: ({items.length}) {`$${total}`}
        </p>
        <p>Items in your bag are not reserved. Checkout to make them yours.</p>
        <button
          className={styles.resetcart_btn}
          onClick={() => {
            clearCart();
          }}
        >
          Clear Cart
        </button>
        {items.map((item) => {
          return (
            <CartCard
              img={item.img}
              name={item.name}
              category={item.category}
              price={item.price}
              id={item.id}
              key={item.id}
              quantity={item.quantity}
            />
          );
        })}
      </section>
      <section className={styles.cartInfo__container}>
        <h2>Order Summary</h2>
        <div className={styles.cartInfo__wrap}>
          <p>Order:</p>
          <p>{`$${total}`}</p>
        </div>
        <div className={styles.cartInfo__wrap}>
          <p>Taxes:</p>
          <p>{`$${tax}`}</p>
        </div>
        <div className={styles.cartInfo__wrap}>
          <p>Delivery:</p>
          <p>{`$${delivery}`}</p>
        </div>
        <div className={styles.cartInfo__wrap}>
          <p>Total:</p>
          <p>{`$${bill}`}</p>
        </div>
        <CustomButton
          title={"Checkout"}
          styles={{
            background: "var(--text-color)",
            color: "var(--background-color)",
            width: "100%",
            marginTop: "1em",
          }}
        ></CustomButton>
      </section>
    </>
  );
};

const EmptyCart = () => {
  return (
    <article className={styles.emptycart__container}>
      <h1>Your Bag is Empty</h1>
      <p>Add items to your bag to checkout</p>
      <Link href={"/"}>
        <CustomButton
          title={"Get Started"}
          styles={{
            background: "var(--text-color)",
            color: "var(--background-color)",
          }}
        />
      </Link>
    </article>
  );
};

export default function Cart() {
  const { items, clearCart } = useContext(CartContext);
  return (
    <main className={styles.cart__container}>
      {items.length > 0 ? (
        <CartContent items={items} clearCart={clearCart} />
      ) : (
        <EmptyCart />
      )}
    </main>
  );
}
