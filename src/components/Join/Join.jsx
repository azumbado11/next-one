import React from "react";
import "./Join.css";
import Link from "next/link";
import { CustomButton } from "../index";
const Join = () => {
  return (
    <article className="join__container">
      <h1>Join us and get discounts</h1>
      <Link href={"/placeholder"}>
        <CustomButton
          title={"Sign Up ⇒"}
          styles={{
            background: "var(--text-color)",
            color: "var(--background-color)",
            fontSize: "16px",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        />
      </Link>
    </article>
  );
};

export default Join;
