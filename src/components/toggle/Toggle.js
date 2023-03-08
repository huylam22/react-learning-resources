import React, { useState } from "react";
import "./ToggleStyle.css";
// // Stateless funcitonal component: Component nhung khong su dung state
// // Example
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// // Stateful functional component: Component co su dung state
// function Toggle2() {
//   // const [count, setCount] = useState(); // state here
//   return <div className="toggle"></div>;
// }

// *** Su dung hook tren cung (khong duoc su dung trong loop, function, if...) viet trong functional components

function Toggle() {
  // 1 . enabling state: useState( initialize value ); khoi tao state
  // 2. initialize state: gia tri khoi tao: useState(false) - Toggle dang tat (any type of values)
  // 3. reading state
  // 4. update state
  // return <div className="toggle" onClicl = "toggle" ></div>;

  const [on, setOn] = useState(false);
  console.log(on); // === const array = useState(false); console.log(array[0]); console.log(array[1]);
  const handleToggle = () => {
    // setOn(callback) --> setOn(prevState => !prevState); thay doi state dung callback function
    // setOn((on) => !on);
    setOn((on) => {
      return !on;
    });
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
        {/* state change (re-render) -- update state */}
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
