"use client";
import React from "react";
import "./Carousel.css";
import { Card } from "../index";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Carrousel = ({ title, items }) => {
  return (
    <>
      <h2>{title}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "var(--accent-color)",
          "--swiper-pagination-bottom": "-6px",
        }}
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card
                img={item.img}
                name={item.name}
                category={item.category}
                price={item.price}
                arrival={item.arrival}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carrousel;
