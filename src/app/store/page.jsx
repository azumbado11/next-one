"use client";
import styles from "./page.module.css";
import { useSearchParams, usePathname } from "next/navigation";
import { Card } from "../../components/index";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CATEGORY_VALUES,
  GENDER_QUERY_INPUTS,
  SPORT_QUERY_INPUTS,
  BOOLEAN__QUERY__INPUTS,
} from "../../constants";

const DetailsSection = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  /* Function that creates and append a new request query to update the UI */
  const createQuery = (name, value) => {
    const query = new URLSearchParams(params.toString());
    query.set(name, value);
    return query.toString();
  };

  const handleGender = (e) => {
    router.push(pathname + "?" + createQuery("gender", `${e.target.value}`));
  };

  const handleSport = (e) => {
    router.push(pathname + "?" + createQuery("sport", `${e.target.value}`));
  };

  return (
    <>
      <details className={`${styles.border} ${styles.details}`} name="genre">
        <summary className={`${styles.boldText} ${styles.summary}`}>
          Genre
        </summary>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="genre"
            value="all"
            onChange={handleGender}
          />
          All
        </label>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="genre"
            value="men"
            onChange={handleGender}
          />
          Men
        </label>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="genre"
            value="women"
            onChange={handleGender}
          />
          Women
        </label>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="genre"
            value="unisex"
            onChange={handleGender}
          />
          Unisex
        </label>
      </details>
      <details className={`${styles.border} ${styles.details}`} name="sports">
        <summary className={`${styles.boldText} ${styles.summary}`}>
          Sports
        </summary>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="sports"
            value="all"
            onChange={handleSport}
          />
          All
        </label>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="sports"
            value="lifestyle"
            onChange={handleSport}
          />
          Lifestyle
        </label>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="sports"
            value="football"
            onChange={handleSport}
          />
          Football
        </label>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="sports"
            value="running"
            onChange={handleSport}
          />
          Running
        </label>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="sports"
            value="basketball"
            onChange={handleSport}
          />
          Basketball
        </label>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="sports"
            value="soccer"
            onChange={handleSport}
          />
          Soccer
        </label>
        <label className={styles.label__container}>
          <input
            type="radio"
            name="sports"
            value="skateboarding"
            onChange={handleSport}
          />
          Skateboarding
        </label>
      </details>
    </>
  );
};

export default function Store() {
  const [items, setItems] = useState(null); /* stores fetched items */

  const params = useSearchParams(); /* request all url q.params */
  let gender = params.get("gender"); /* param to filter by gender */
  let sport = params.get("sport"); /* param to filter by sport */
  let category = params.get("category"); /* param to filter by category */
  let new_arrival = params.get("new_arrival");
  let sale = params.get("sale");

  /* Compare query value to an array of allowed values */
  CATEGORY_VALUES.indexOf(category) === -1 ? (category = "") : category;
  GENDER_QUERY_INPUTS.indexOf(gender) === -1 ? (gender = "") : gender;
  SPORT_QUERY_INPUTS.indexOf(sport) === -1 ? (sport = "") : sport;

  BOOLEAN__QUERY__INPUTS.indexOf(new_arrival) === -1
    ? (new_arrival = "")
    : new_arrival;
  BOOLEAN__QUERY__INPUTS.indexOf(sale) === -1 ? (sale = "") : sale;

  /* Fetchs and Refetchs if params change */
  useEffect(() => {
    fetch(
      `http://localhost:4000/api/v1/items/${category}?sport=${sport}&gender=${gender}&new_arrival=${new_arrival}&sale=${sale}`
    )
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, [params]);

  return (
    <main className={styles.store__container}>
      {/* Dynamic Store Product Info */}
      {items && items.message ? (
        <h2>No Matches</h2>
      ) : (
        <h2 className={styles.product_title}>
          {new_arrival === "true" ? "New Arrivals" : ""}
          {sale === "true" ? "Sale" : ""}
          {gender === "all" ? "" : gender} {sport === "all" ? "" : sport}{" "}
          {category ? category : "All Items"} ({items && items.data.length})
        </h2>
      )}
      <div className={styles.products__wrapper}>
        <aside className={styles.filters__container}>
          <Link
            href={"/store/?category=shoes"}
            className={`${styles.boldText} ${styles.border}`}
          >
            Shoes
          </Link>
          <Link
            href={"/store/?category=clothing"}
            className={`${styles.boldText} ${styles.border}`}
          >
            Clothing
          </Link>
          <Link
            href={"/store/?category=accessories"}
            className={`${styles.boldText} ${styles.border}`}
          >
            Accesories
          </Link>
          <DetailsSection />
        </aside>
        <section className={styles.itemgrid__container}>
          {/* Dynamic Store Grid */}
          {items && items.message
            ? null
            : items !== null
            ? items.data.map((item) => {
                return (
                  <Card
                    img={item.img}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                    arrival={item.arrival}
                    id={item.id}
                    key={item.id}
                  />
                );
              })
            : null}
        </section>
      </div>
    </main>
  );
}
