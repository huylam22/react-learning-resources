import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // Stale (outdated) state: sua loi click nhieu lan trong time de luu kq
  // const handleIncrement = () => {
  //   // setTimeout(function delay() {
  //   //   setCount((count) => count + 1);
  //   // }, 1000);
  //   setCount(count + 1);
  // };

  const [info, setInfo] = useState({
    firstName: "Huy",
    lastName: "Lam",
  });

  useEffect(() => {
    console.log(`count`);
  }, [info.lastName]);

  // dependencies (moi lan re-render neu ko set dependencies ([]) thi no se chay vao useEffect (console.log(count)))
  // useEffect run callback initial vs moi lan dependencies thay doi

  return (
    <div className="flex gap-x-4 p-5 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        className="inline-block p-3 bg-green-500 text-white rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
