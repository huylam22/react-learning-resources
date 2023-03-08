import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  // const inputRef, abcRef = useRef(initialValue)
  //   const countRef = useRef(0);
  // truy xuat gia tri ref
  //   console.log(countRef.current);
  // update gia tri cua ref
  // khi thay doi components KHONG bi render lai (useState thi nguoc lai)
  //   countRef.current = 10;
  // const [count, setCount] = useState(0); ***
  //   const countRef = useRef(0);
  //   const handle = () => {
  //     const updateCount = countRef.current + 1;
  //     console.log(updateCount); // ***** UseRef chi render component 1 lan va la dong bo (update lien)
  //     // setCount(updateCount); **** useState re-render component va la bat dong bo
  //     countRef.current++;
  //   };
  //   console.log("Render");
  // useEffect(() => {
  //   const timer = setInterval(); /// NEU INTERVAL O NGOAI USEEFFECT (LUU CAI INTERVAL DO THOI CHU KO RE-RENDER)
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    // side-effect
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div>
      <h3> Time: {count}</h3>
      <button onClick={handleStart}> Start</button>
      <button onClick={handleStop}> Stop</button>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
};

export default Ref;
