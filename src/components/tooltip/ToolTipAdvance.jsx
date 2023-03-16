import React, { useState } from "react";
import Portal from "../portal/Portal";
import { CSSTransition } from "react-transition-group";
import "../../index.scss"; // import the CSS file
const ToolTipAdvance = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });

  const handleMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };
  return (
    <div className="relative inline-block ml-5">
      <CSSTransition in={visible} className="fade" timeout={300} unmountOnExit>
        {(status) => (
          <Portal
            visible={status !== "exited"}
            overlay={false}
            bodyClassName={`tooltip`}
          >
            <p
              className="p-3 bg-black text-white rounded-xl inline-block absolute -translate-y-full max-w-[200px] -translate-x-2/4 tooltip content transition-all  z-[9999]"
              style={{
                top: coords.top - coords.height / 2 + window.scrollY,
                left: coords.left + coords.width / 2,
              }}
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </div>
    </div>
  );
};

export default ToolTipAdvance;
