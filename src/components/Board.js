import React from "react";
import "./Board.css";
import Square from "./Square";

const Board = ({ squares, click, winner, winIndex }) => {
  if (winner === "") {
    return (
      <div>
        <div className="board">
          {squares.map((square, i) => {
            return (
              <Square
                key={i}
                value={square}
                click={() => click(i)}
                index={""}
              />
            );
          })}
        </div>
        <h3 className="whowins">Let's see who wins !! </h3>
      </div>
    );
  } else if (winner === "X") {
    return (
      <div>
        <div className="board">
          {squares.map((square, i) => {
            return (
              <Square
                key={i}
                value={square}
                click={() => click(i)}
                index={""}
              />
            );
          })}
        </div>
        <h3 className="whowins">X wins!!</h3>
      </div>
    );
  } else if (winner === "O") {
    return (
      <div>
        <div className="board">
          {squares.map((square, i) => {
            return (
              <Square
                key={i}
                value={square}
                click={() => click(i)}
                index={""}
              />
            );
          })}
        </div>
        <h3 className="whowins">O wins!!</h3>
      </div>
    );
  } else {
    return (
      <div>
        <div className="board">
          {squares.map((square, i) => {
            return (
              <Square
                key={i}
                value={square}
                click={() => click(i)}
                index={""}
              />
            );
          })}
        </div>
        <h3 className="whowins">Game Draw!!</h3>
      </div>
    );
  }
};

export default Board;
