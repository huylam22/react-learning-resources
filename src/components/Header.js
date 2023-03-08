import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      //   console.log("fixed");
      const header = document.getElementById("header");
      if (window.scrollY > 0) header.classList.add("fixed");
      else header.classList.remove("fixed");
    };
    window.addEventListener("scroll", handleFixedHeader);
    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    };
  }, []);
  return <div className="p-5 w-full bg-black" id="header"></div>;
};

export default Header;
