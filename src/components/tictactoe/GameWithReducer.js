import React, { useReducer } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
// import "./GameStyle.css";
// Initial state = object - gia tri khoi tao
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

// initial state is immutable
// ==> Clone de chinh sua cai state (dung spread operator [... arr], {...obj})
// nhung mang qua phuc tap ==> deep copy: JSON.parse(stringify(obj))
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      console.log(state, action.payload);
      const { board, xIsNext } = state; // destructuring
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;

      // const nextState = JSON.parse(JSON.stringify(state)); // clone lai state

      // // board[index] = state.xIsNext ? "X" : "O";
      // nextState.board[index] = xIsNext ? "X" : "O"; // do da Destructuring
      // console.log(nextState);
      // // console.log("2" + nextState2.xIsNext);
      // // console.log(nextState);
      // // setXIsNext(!state.xIsNext);
      // nextState.xIsNext = !xIsNext; // Same Logic
      // // return { ...state, xIsNext: action.payload };
      // return nextState;

      const nextState2 = {
        ...state,
        board: [...board],
        xIsNext: !xIsNext,
      };
      console.log(nextState2);
      console.log(nextState2.board);
      nextState2.board[index] = xIsNext ? "X" : "O";
      return nextState2;
    } // block scope

    case "RESET": {
      // Cach 1
      const nextState = JSON.parse(JSON.stringify(state)); // clone lai state
      nextState.board = initialState.board;
      nextState.xIsNext = true;
      return nextState;

      // Cach 2: tra lai bang ban dau`
      // return initialState;
    }

    default:
      console.log("Error");
      break;
  }
  return state;
};

const GameWithReducer = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(state.board);
  // console.log(winner);
  const handleClick = (index) => {
    // **** UseReducer
    dispatch({
      type: "CLICK", // pass vao action type la CLICK
      payload: {
        // co data la payload
        index,
        winner,
      },
    });
  };
  const handleResetGame = (state) => {
    dispatch({
      type: "RESET", // pass vao action type la CLICK
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        {" "}
        Reset Game
      </button>
    </div>
  );
};

export default GameWithReducer;
