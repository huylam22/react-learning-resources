import { useEffect, useRef, useState } from "react";

export default function useHover() {
  // mouseover
  // mouseout
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseOut = () => {
    setHovered(false);
  };
  useEffect(() => {
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      dom.removeEventListener("mouseover", handleMouseOver);
      dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return { hovered, nodeRef };
}
