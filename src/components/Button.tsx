import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/context";
import "../styles/button.css";

interface ButtonProps {
  label: string;
  func?: () => void;
}

const Button = ({ label, func }: ButtonProps) => {
  const { counter } = useContext(AppContext);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (counter === 0 && label === "Previous") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [counter]);

  return (
    <button
      disabled={disabled}
      className={`primary-btn ${disabled ? "disabled" : ""}`}
      onClick={func}
    >
      {label}
    </button>
  );
};

export default Button;
