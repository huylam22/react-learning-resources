import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

// First tao div portal-wrapper
function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}

// Tao bien tra ve div portal-wrapper
const portalWrapperElm = createPortalWrapper();
// fixed inset-0 z-[9999]
//content relative z-10
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  overlay = true,
  children,
}) => {
  // SECOND: dung useEffect de render div portal wrapper
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);

  // bien renderContent OVERLAY THI CHECK DIEU KIEN
  const renderContent = (
    <div className={`${containerClassName}`} style={containerStyle}>
      {overlay && (
        <div
          className="absolute inset-0 bg-black overlay bg-opacity-20"
          onClick={onClose}
        ></div>
      )}
      <div className={`tooltip ${bodyClassName}`} style={bodyStyle}>
        {children}
      </div>
    </div>
  );

  // THIRD: dung create portal cua react-dom de render ra ben ngoai va trong div portal wrapper
  return createPortal(renderContent, portalWrapperElm);
};

// LAST: CHECK PROPS
Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
  overlay: PropTypes.bool,
};
export default Portal;
