import React from "react";
import "./Square.css";

const Square = ({ value, click }) => {
  return (
    <button className="buttons" onClick={click}>
      {value}
    </button>
  );
};

export default Square;
