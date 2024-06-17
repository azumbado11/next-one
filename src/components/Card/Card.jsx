import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Card.css";

const Card = ({ img, name, category, price, arrival, id }) => {
  return (
    <article className="item-card__container">
      <img src={img} alt={`${name} Image`} className="image" loading="lazy" />{" "}
      {/* src={img} width={290} height={260}: 260px; width: 290px;*/}
      <div className="card-text__container">
        {arrival ? (
          <div className="card-titles__container">
            <p className="card-text-bold arrival-text">New</p>
            <Link href={`/store/${id}`}>
              <p className="card-text-bold card-link">{name}</p>
            </Link>
          </div>
        ) : (
          <Link href={`/store/${id}`}>
            <p className="card-text-bold card-link">{name}</p>
          </Link>
        )}
        {category ? <p className="card-text-shade">{category}</p> : null}
        {price ? <p className="card-text-bold">{`$${price}`}</p> : null}
      </div>
    </article>
  );
};

export default Card;
/* Item Card just accepts image-url, item-name, item-category and item-price */
