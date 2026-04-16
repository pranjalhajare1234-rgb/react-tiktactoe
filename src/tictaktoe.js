 import React, { useState } from "react";
import "./tictaktoe.js";

export default function TicTaktoe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (i) => {
    if (board[i] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[i] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const renderSquare = (i) => {
    return (
      <button className="cell" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  };

  const checkWinner = (b) => {
    if (b[0] && b[0] === b[1] && b[1] === b[2]) return b[0];
    if (b[3] && b[3] === b[4] && b[4] === b[5]) return b[3];
    if (b[6] && b[6] === b[7] && b[7] === b[8]) return b[6];

    if (b[0] && b[0] === b[3] && b[3] === b[6]) return b[0];
    if (b[1] && b[1] === b[4] && b[4] === b[7]) return b[1];
    if (b[2] && b[2] === b[5] && b[5] === b[8]) return b[2];

    if (b[0] && b[0] === b[4] && b[4] === b[8]) return b[0];
    if (b[2] && b[2] === b[4] && b[4] === b[6]) return b[2];

    return null;
  };

  const winner = checkWinner(board);

  return (
    <div className="game-container">
      <h2 className="title">Tic Tac Toe</h2>

      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      <h3 className="status">
        {winner ? `Winner: ${winner}` : `Turn: ${isXTurn ? "X" : "O"}`}
      </h3>

      <button
        className="restart-btn"
        onClick={() => {
          setBoard(Array(9).fill(null));
          setIsXTurn(true);
        }}
      >
        Restart Game
      </button>
    </div>
  );
}