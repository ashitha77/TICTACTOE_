import React from "react";
import "./Player.css";
const Player = ({ isX }) => {
  console.log(`XO${isX}`);
  return (
    <>
      <div id={`XO${isX}`}>X</div>
      <div id={`XO${!isX}`}>O</div>
    </>
  );
};

export default Player;
