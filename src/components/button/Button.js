import React, { useState } from "react";
import "./Button.scss";
import styles from "./Button.module.css";
// styled-components
const Button = (props) => {
  const [increment, setIncrement] = useState(0);
  const handleIncrement = () => {
    setTimeout(function delay() {
      setIncrement((prev) => prev + 1);
    }, 1000);
  };
  return (
    <div>
      <div> {increment}</div>
      <button
        // className={`button ${props.className || ""}`}
        className={`${styles.button} ${
          props.secondary ? styles.buttonSecondary : ""
        }`} // in Appjs get the secondary style by input secondary in the button (e.g: <Button secondary> ... </Button>)
        onClick={handleIncrement}
      >
        {" "}
        {props.children}
      </button>
    </div>
  );
};

export default Button;
