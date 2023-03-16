// import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const DropDown = () => {
  const { show, setShow, nodeRef } = useClickOutside();
  // const [showDropDown, setShowDropDown] = useState(false);
  // const dropDownRef = useRef(null);

  // // CACH 1: DUNG USEREF
  // useEffect(() => {
  //   function handleClickOutDropDown(e) {
  //     if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
  //       // **** CACH 2:
  //       // ****  if (dropDownRef.current !== e.target) {
  //       //   console.log("click outside");
  //       setShowDropDown(false);
  //       // console.log(dropDownRef.current);
  //       // console.log(e.target);
  //     }
  //     //   else {
  //     //     console.log("clcik inside");
  //     //     console.log(dropDownRef.current);
  //     //     console.log(e.target);
  //     //   }
  //   }
  //   document.addEventListener("click", handleClickOutDropDown);

  //   return () => document.removeEventListener("click", handleClickOutDropDown);
  // }, []);

  // // CACH 2: e.StopPagination() --> khong can set ref
  // const handleClickDropDown = (e) => {
  //   e.stopPropagation();
  //   setShowDropDown((prevShowDropDown) => !prevShowDropDown);
  // };
  return (
    <div className="relative w-full max-w-[500px]" ref={nodeRef}>
      {/* khong can set ref neu dung e.StopPagination() */}
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
        <div
          // onClick={(e) => e.stopPropagation()}
          className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg cursor-pointer top-full"
        >
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">Javascript</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
