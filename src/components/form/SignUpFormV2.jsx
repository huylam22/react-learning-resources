import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/// **** FORMIK + YUP ****

const SignUpFormV2 = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(value) => {
        console.log(value);
      }}
      autoComplete="off"
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter Your Firstname..."
            className="p-4 rounded-md border border-gray-100 outline-none"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter Your Lastname..."
            className="p-4 rounded-md border border-gray-100 outline-none"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
