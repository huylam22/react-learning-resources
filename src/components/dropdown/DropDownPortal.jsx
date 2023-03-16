// import React, { useEffect, useRef, useState } from "react";
import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import ReactDOM from "react-dom";

const DropDownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutside();
  const [coords, setCoords] = useState({});
  const handleClickDropDown = (e) => {
    // console.log(nodeRef.current.getBoundingClientRect());
    const coords = nodeRef.current.getBoundingClientRect();
    setCoords(coords);
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[500px]" ref={nodeRef}>
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        onClick={handleClickDropDown}
      >
        Selected
      </div>
      {show && <DropDownList coords={coords}></DropDownList>}
    </div>
  );
};

function DropDownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg cursor-pointer top-full"
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="p-5 cursor-pointer">Javascript</div>
      <div className="p-5 cursor-pointer">Javascript</div>
      <div className="p-5 cursor-pointer">Javascript</div>
    </div>,
    document.querySelector("body")
  );
}
export default DropDownPortal;
