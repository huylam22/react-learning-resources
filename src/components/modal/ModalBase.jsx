import React from "react";
import Portal from "../portal/Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  const squareStyle = {
    transition: "all 250ms",
    backgroundImage:
      "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 67.21%, rgba(255, 255, 255, 0) 100%), linear-gradient(-103.35deg, rgb(215, 252, 254) 3.73%, rgb(251, 213, 250) 56.7%, rgb(254, 224, 213) 100.35%)",
  };
  return (
    <>
      <CSSTransition in={visible} timeout={250} classNames="zoom" unmountOnExit>
        {(status) => (
          <Portal
            visible={status !== "exited"}
            // onClose la de khi click vao overlay thi se close modal (setOpen - CloseModal ben App.jsx)
            onClose={onClose}
            containerClassName="fixed z-[9999] inset-0 flex items-center justify-center"
            bodyStyle={squareStyle}
            // class content lam transition
            bodyClassName={`relative z-10 content ${bodyClassName}`}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};
export default ModalBase;
