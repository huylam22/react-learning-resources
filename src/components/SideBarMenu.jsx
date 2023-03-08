import React from "react";

const SideBarMenu = React.forwardRef((props, ref) => {
  return (
    <div
      className={`w-[300px] fixed bg-gray-300 top-0 left-0 z-10 shadow-md bottom-0 transition-all ${
        props.show ? "" : "-translate-x-full"
      }`}
      ref={ref}
    ></div>
  );
});

export default SideBarMenu;
