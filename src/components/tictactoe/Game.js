import React, { useReducer, useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";

// const obj1 = {
//   name: "Huy",
// };
// const obj2 = {
//   name: "Lam",
// };
// const obj3 = { ...obj1, ...obj2 }; // Merge 2 object lai

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
      // console.log(state, action.payload);
      const { board, xIsNext } = state; // destructuring
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state)); // clone lai state

      // board[index] = state.xIsNext ? "X" : "O";
      nextState.board[index] = xIsNext ? "X" : "O"; // do da Destructuring

      // console.log(nextState);
      // setXIsNext(!state.xIsNext);
      nextState.xIsNext = !xIsNext; // Same Logic

      return nextState;
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

const Game = () => {
  //****  */ useReducer
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // dispatch la 1 function (param la action) truyen vao action tuong ung
  // e.g dispatch({type: "CLICK"}) goi ve reducer function (gameReducer)

  // Initial state = object - gia tri khoi tao
  // const action - {type: 'CLICK', payload: {}}
  //  action type la object co 2 - 3 props de su dung reducer function (switch case)
  // payload la data truyen vao

  //***** */ Use State
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // const blankBoard = Array(9).fill(null);

  // *** ALTERNATIVE OPTIMAL
  // const [state, setState] = useState({
  //   board: blankBoard,
  //   xIsNext: true,
  // });

  const winner = calculateWinner(state.board);
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

    // ***** UseState
    // const boardCopy = [...state.board]; // vi dang dung state nen clone bang de ko thay doi original array
    // if (winner || boardCopy[index]) return;
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy);
    // setXIsNext(!state.xIsNext);

    // ***** Alternative
    //   setState({
    //     ...state, // Clone cai state ban dau (spread operator) va ghi de` len
    //     board: boardCopy,
    //     xIsNext: !state.xIsNext,
    //   });
  };
  const handleResetGame = (state) => {
    // setState({});
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);

    // *** ALTERNATIVE
    // setState({
    //   ...state, // Clone cai state ban dau (spread operator) va ghi de` len
    //   board: blankBoard,
    //   xIsNext: true,
    // });

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

export default Game;
