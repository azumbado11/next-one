"use client";
import React from "react";
import "./CustomButton.css";
const CustomButton = ({ title, styles, handleClick }) => {
  return (
    <button className={`custom-button`} style={styles} onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomButton;
/* 
 styles for dynamic styles
 handleClick for dynamic fnc 
*/
/* 
 onClick={handleClick}
*/
