import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";
import Button from "./components/Button";
import Player from "./components/Player";
import { calculateWinner } from "./Helper";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  let newSquares = squares;
  let winner = "";
  let winArray = calculateWinner(squares);
  let winIndex = "";

  let gameOver = false;

  console.log(winArray);
  winArray.forEach((ind) => {
    if (ind !== null) {
      winIndex = ind;
    }
  });

  if (winIndex !== "") {
    gameOver = true;
    if (squares[winIndex[0]] === "X") {
      winner = "X";
    } else {
      winner = "O";
    }
  } else if (squares.indexOf(null) === -1) winner = "T";

  const clickHandler = (index, event) => {
    if (
      squares[index] !== "X" &&
      squares[index] !== "O" &&
      gameOver === false
    ) {
      isX ? (newSquares[index] = "X") : (newSquares[index] = "O");
      setSquares(newSquares);
      setIsX(!isX);
    }
  };

  const resetHandler = (e) => {
    newSquares = Array(9).fill(null);
    setSquares(newSquares);
    setIsX(true);
  };

  return (
    <div className="body">
      <div className="header">
        <Header />
      </div>
      <div className="App">
        <h1 className="heading"> TIC TAC TOE </h1>
        <Player isX={isX} />
        <Board
          squares={squares}
          click={clickHandler}
          winner={winner}
          winIndex={winIndex}
        />
        <Button click={resetHandler} />
      </div>
    </div>
  );
}
