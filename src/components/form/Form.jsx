import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

// ***** Fomik + Yup va React hook form (library) *****
const Form = () => {
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
  // const [values, setValues] = useState({
  //   fullName: "",
  //   email: "",
  //   hobby: false,
  // });

  // // object.property : dot notation
  // // object["property"] : bracket notation
  // const handleInputChange = (e) => {
  //   const type = e.target.type;
  //   // if (type === "checkbox") {
  //   //   setValues({
  //   //     ...values,
  //   //     [e.target.name]: e.target.checked,
  //   //   });
  //   // } else {
  //   //   setValues({
  //   //     ...values,
  //   //     [e.target.name]: e.target.value,
  //   //   });
  //   // }
  //   setValues({
  //     ...values,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  // };
  const { values, handleChange } = useHandleChange({
    fullName: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullName === "") {
      setNameError("Name is empty");
    } else {
      setNameError("");
    }
    // console.log(values);
  };

  return (
    <div className="p-5">
      <form
        action=""
        className="flex gap-x-3 p-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullName"
            className=" w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
            placeholder="Enter your name..."
            onChange={handleChange}
          />
          {nameError}
        </div>

        <input
          type="text"
          name="email"
          className=" w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
          placeholder="Enter your email..."
          onChange={handleChange}
        />
        <input type="checkbox" name="hobby" onChange={handleChange} />
        <button type="submit" className="p-3 rounded-lg bg-blue-500 text-white">
          Submit
        </button>
      </form>

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

export default Form;
