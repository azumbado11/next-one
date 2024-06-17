import React from "react";
import Link from "next/link";
import "./Hero.css";
import { CustomButton } from "../index";

const Hero = () => {
  return (
    <section className="hero__container">
      <div className="hero-texts__container">
        <h1>E-Commerce</h1>
        <h1>Experience</h1>
        <p>Everything you need is here.</p>
        <Link href={"/store"}>
          <CustomButton
            title={"Shop Now"}
            styles={{
              background: "var(--text-color)",
              color: "var(--background-color)",
            }}
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
