import React from "react";

const Button = ({ click }) => {
  return (
    <div>
      <button
        style={{
          padding: "0.5em 1.3em",
          borderRadius: "0.7em",
          backgroundColor: "rgb(10, 170, 250)",
          color: "rgb(171, 227, 255)",
          fontFamily: "Comic Sans MS",
          fontSize: "1em"
        }}
        onClick={click}
      >
        Reset
      </button>
    </div>
  );
};

export default Button;
