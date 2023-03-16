import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
/// **** FORMIK + YUP ****

const SignUpFormFinal = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
    email: Yup.string().email().required("Required"),
    intro: Yup.string().required("Required"),
    job: Yup.string().required("Required"),
    term: Yup.boolean().oneOf([true], "Please check the terms and conditions"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    intro: "",
    job: "",
    term: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(value, actions) => {
        // console.log(value);
        // console.log(actions);
        setTimeout(() => {
          actions.resetForm(initialValues);
          actions.setSubmitting(false);
        }, 5000);
      }}
      autoComplete="off"
    >
      {({ isSubmitting }) => (
        <Form className="p-10 w-full max-w-[500px] mx-auto">
          {/* <div className="flex flex-col gap-2 mb-4"> FirstName</div> */}
          <MyInput
            label="First Name"
            name="firstName"
            placeholder="Enter Your FirstName"
            id="firstName"
          ></MyInput>

          {/* <div className="flex flex-col gap-2 mb-4">LastName</div> */}
          <MyInput
            label="Last Name"
            id="lastName"
            name="lastName"
            placeholder="Enter Your LastName"
          ></MyInput>

          {/* <div className="flex flex-col gap-2 mb-4">Email</div> */}
          <MyInput
            label="Email Address"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your email address..."
          ></MyInput>

          {/* <div className="flex flex-col gap-2 mb-4">Introduce Yourself</div> */}
          <MyTextArea
            label="Introduce Yourself"
            id="intro"
            name="intro"
            placeholder="Enter Your self..."
          ></MyTextArea>

          <MySelectBox name="job" label="Select your job">
            <option value="select">Select your job</option>
            <option value="frontend">Frontend Dev</option>
            <option value="backend">Backend Dev</option>
            <option value="fullstack">Fullstack Dev</option>
          </MySelectBox>

          <MyCheckBox name="term">
            {" "}
            I accept the terms and conditions
          </MyCheckBox>
          <div>
            <button
              type="submit"
              className={`w-full p-4 bg-blue-600 text-white font-semibold rounded-lg ${
                isSubmitting ? "bg-blue-200" : ""
              }`}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

// useField
// Rest parameter: ...props la nhung cai props con lai
// sprad operator: ...field[0]: la nhung cai duoi
//  name = "firstName"
//  onChange = {formik.handleChange}
//  onBlue = {formik.handleBlur}
//  value = {formik.values.firstName}
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //   console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name} className="cursor-pointer">
        {label}
      </label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100 outline-none"
        // placeholder={props.placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //   console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name} className="cursor-pointer">
        {label}
      </label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-100 outline-none resize-none h-[150px]"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name} className="cursor-pointer">
        {label}
      </label>
      <select
        type="text"
        className="p-4 rounded-md border border-gray-100 outline-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default SignUpFormFinal;
