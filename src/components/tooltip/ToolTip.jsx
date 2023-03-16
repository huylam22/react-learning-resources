import React, { useState } from "react";
import ReactDOM from "react-dom";
import useHover from "../../hooks/useHover";
const ToolTip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span
        className="font-semibold cursor-pointer"
        ref={nodeRef}
        onMouseOver={handleHover}
      >
        {text}
      </span>
    </div>
  );
};

const TooltipContent = ({ children, coords }) => {
  return ReactDOM.createPortal(
    <p
      className="p-3 bg-black text-white rounded-xl inline-block absolute -translate-y-full max-w-[200px] -translate-x-2/4"
      style={{
        top: coords.top - coords.height / 2 + window.scrollY,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
};
export default ToolTip;
