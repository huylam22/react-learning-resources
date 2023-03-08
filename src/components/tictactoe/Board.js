import React from "react";
// import { calculateWinner } from "../../helpers";
import Cell from "./Cell";

const Board = (props) => {
  // array(num).fill() --> [0,1,2,3,4...]
  //   console.log(props);

  //   const cells = [null, null, null, "X", "X", "X", null, null, null];
  //   console.log(calculateWinner(cells));
  return (
    <div className="game-board">
      {/* <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell> thay the bang rendering list (map) */}
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
