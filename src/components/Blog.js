// import React, { useEffect, useRef } from "react";
import useHover from "../hooks/useHover";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blog = () => {
  // Custom hook
  const { contentRef } = useLinkNewTab();
  // Dung UseEffect de tuong tac vs DOM
  const { hovered: hovered1, nodeRef: nodeRef1 } = useHover();
  const { hovered: hovered2, nodeRef: nodeRef2 } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quam
        ad magnam quaerat beatae laboriosam doloremque mollitia aspernatur id ab
        nulla maxime nesciunt illum odio! Suscipit quia voluptatum itaque
        veniam?
        <a
          href="https://google.com"
          className={`underline ${hovered1 ? "text-green-400" : ""}`}
          ref={nodeRef1}
        >
          {" "}
          google.com
        </a>
      </p>
      <p className="mb-5 p-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam vero
        voluptates,
        <a
          href="https://google.com"
          className={`underline ${hovered2 ? "text-green-400" : ""}`}
          ref={nodeRef2}
        >
          {" "}
          google.com
        </a>
        nostrum minus ratione laboriosam exercitationem dolore, numquam
        doloribus, odio explicabo sit officia! Tempora rerum iure sint inventore
        dolorem facilis?
      </p>
    </div>
  );
};

export default Blog;
