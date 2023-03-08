import React from "react";
import "./Button.scss";
import styles from "./Button.module.css";
// styled-components
const Button = (props) => {
  return (
    <div>
      <button
        className={`button ${props.className || ""}`} // using props then in App js input the className (e.g: className = "button--secondary")
        // className={`${styles.button} ${
        //   props.secondary ? styles.buttonSecondary : ""
        // }`}
      >
        {" "}
        {props.children}
      </button>
    </div>
  );
};

export default Button;
