import { useState } from "react";
import { handleResetButton } from "../utils/handleResetButton";
import { Board } from "../utils/types";
import { Cell } from "./Cell";

export function GameBoard(): JSX.Element {
  const board: Board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ];

  const [allRows, setAllRows] = useState<Board>(board);
  const [player, setPlayer] = useState<"A" | "B">("A");
  const [winner, setWinner] = useState<null | "A" | "B">(null);

  return (
    <div className="board">
      <div className="board-header">
        {!winner && <p>Player {player}'s turn</p>}
        {winner && <p>Player {winner} is the Winner!</p>}
        <button onClick={() => handleResetButton(setAllRows)}>Reset</button>
      </div>
      {allRows.map((row, i) => (
        <div className="row" key={i}>
          {row.map((cell, j) => (
            <div key={j}>
              <Cell
                player={player}
                setPlayer={setPlayer}
                setWinner={setWinner}
                cellValue={cell}
                allRows={allRows}
                setAllRows={setAllRows}
                col={j}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}