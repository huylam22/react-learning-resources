import React from "react";
// test
const jsx = () => {
  const element = <div id="root"> Hello World </div>;
  const elementR = React.createElement("div", { id: "root" }, "Hello World");
  const element2 = (
    <div>
      <span> Hello </span> <span> World </span>
    </div>
  );

  const element2R = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello"),
      " ",
      React.createElement("span", null, "World"),
    ],
  });
  return <div></div>;
};

export default jsx;
