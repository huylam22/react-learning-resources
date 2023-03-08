import React, { useEffect, useRef } from "react";

const Input = () => {
  const divRef = useRef(); // co the khong truyen gi hoac truyen null
  const inputRef = useRef(); // co the khong truyen gi hoac truyen null

  useEffect(() => {
    // if (divRef.current) divRef.current.style.backgroundColor = "red";
    // inputRef.current.focus();
    // AUTO FOCUS ON RELOAD
    if (inputRef.current) inputRef.current.focus();
    console.log(divRef.current);
  }, []);
  console.log(divRef.current); // Luu y useRef nen dung trong useEffect boi vi se undefine neu render trc mounting
  return (
    <div className="input-div p-5" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto Focus Input"
        className="inline-block border border-gray-400 p-5 focus:border-blue-400"
      />
    </div>
  );
};

export default Input;
