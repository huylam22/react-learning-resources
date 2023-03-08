import React from "react";

// object destructuring
// Example
// const student = {
//   name: "Huy",
//   age: 24,
// };
// destructure using {.., .. } = student instead on student.name; student.age
// const { name, age } = student;

const Cell = ({ value, onClick, className }) => {
  // Destructuring props
  //   console.log(props); => {value: null, onClick: func}
  //  ==>  const { value, onClick } = props; // Destructuring props co the o tren params

  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {/* destructuring o tren params props nen props.onClick => onClick only
    value same */}
      {value}
    </div>
  );
};

export default Cell;
