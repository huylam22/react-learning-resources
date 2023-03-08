import React, { useState } from "react";

const Form2 = () => {
  // const [fullname, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");

  // const handleInputChange = (e) => {
  //   setFullName(e.target.value);
  // };

  // const handleTextAreaChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);
  // };
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    hobby: false,
  });

  // object.property : dot notation
  // object["property"] : bracket notation
  const handleInputChange = (e) => {
    const type = e.target.type;
    // if (type === "checkbox") {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.checked,
    //   });
    // } else {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.value,
    //   });
    // }
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return (
    <div className="p-5">
      <input
        type="text"
        name="fullName"
        className=" w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
        placeholder="Enter your name..."
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        className=" w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
        placeholder="Enter your email..."
        onChange={handleInputChange}
      />
      <input type="checkbox" name="hobby" onChange={handleInputChange} />
      {/* {message}
      <textarea
        placeholder="Enter your name"
        name="message"
        className=" w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
        onChange={handleTextAreaChange}
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form2;
