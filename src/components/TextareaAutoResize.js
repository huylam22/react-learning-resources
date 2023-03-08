import React, { useLayoutEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (e) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setText(e.target.value);
  };
  // useEffect se bi re-render moi khi type text (glitch)
  useLayoutEffect(() => {
    setTextAreaHeight(`${textareaRef?.current?.scrollHeight}px`);
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5" style={{ minHeight: parentHeight }}>
      <textarea
        className="w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-400 transition-all overflow-hidden resize-none leading-normal"
        placeholder="Enter your content..."
        value={text}
        ref={textareaRef}
        style={{ height: textareaHeight }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
