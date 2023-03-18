import React from "react";
import { CountProvider, useCount } from "../context/countContext";

function CountDisplay() {
  const [count] = useCount();

  return <div>The count is: {count}</div>;
}

function Counter() {
  //   const setCount = () => {};
  const [, setCount] = useCount();

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <button
      className="p-4 font-semibold text-white bg-purple-500 rounded-lg"
      onClick={increment}
    >
      Increment
    </button>
  );
}
const CounterContext = () => {
  return (
    <div>
      <CountProvider>
        <CountDisplay></CountDisplay>
        <Counter></Counter>
      </CountProvider>
    </div>
  );
};

export default CounterContext;
