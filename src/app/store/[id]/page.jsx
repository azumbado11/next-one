"use client";
import React, { useContext, useEffect, useState, Fragment } from "react";
import styles from "./page.module.css";
import { CustomButton } from "../../../components/index";
import CartContext from "../../../Context/Cart/CartContext";

export default function Item({ params }) {
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState(null);
  const { id } = params; /* string */

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/items/item/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, []);

  return (
    <>
      <main className={styles.singleItem__container}>
        {item &&
          item.data.map((item) => {
            return (
              <Fragment key={item.id}>
                <img
                  src={item.img}
                  className={styles.leftSide}
                  alt={`${item.name} image`}
                />
                <section className={styles.rightSide}>
                  <div className={styles.rightSideTxt__wrapper}>
                    <h1 className={styles.title}>{item.name}</h1>
                    <p className={styles.capitalizeText}>
                      {item.genre} {item.category}
                    </p>
                  </div>
                  <p
                    className={(styles.boldText, styles.title)}
                  >{`$${item.price}`}</p>
                  <div className={styles.rightSideTxt__wrapper}>
                    <p className={styles.boldText}>Description</p>
                    <p>{item.description}</p>
                  </div>
                  <CustomButton
                    title={"Add to Bag"}
                    styles={{
                      background: "var(--text-color)",
                      color: "var(--background-color)",
                      width: "180px",
                    }}
                    handleClick={() => {
                      addToCart(item);
                    }}
                  />
                </section>
              </Fragment>
            );
          })}
      </main>
    </>
  );
}

/* 
Item Image
Item Title
Item Category
Item Price
Item Desc 
ADD TO BAG/CART CustomButton

react server component - fetch desde el servidor
El botón tabiem debería de recibir un id, para así poder añadir el item al carrito (?)
*/
/* 
<section className={styles.rightSide}>
          <div className={styles.rightSideTxt__wrapper}>
            <h1 className={styles.title}>{item.name}</h1>
            <p className={styles.capitalizeText}>
              {item.genre} {item.category}
            </p>
          </div>
          <p className={(styles.boldText, styles.title)}>{`$${item.price}`}</p>
          <div className={styles.rightSideTxt__wrapper}>
            <p className={styles.boldText}>Description</p>
            <p>{item.description}</p>
          </div>
          <CustomButton
            title={"Add to Bag"}
            styles={{
              background: "var(--text-color)",
              color: "var(--background-color)",
              width: "180px",
            }}
          />
        </section>




*/
