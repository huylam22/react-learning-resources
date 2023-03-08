import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

/// **** FORMIK + YUP ****

// Raw code for validation
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters or less";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }
//   return errors;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter Your Firstname..."
          className="p-4 rounded-md border border-gray-100 outline-none"
          // name = "firstName"
          // onChange = {formik.handleChange}
          // onBlue = {formik.handleBlur}
          // value = {formik.values.firstName} cai o tren == {...formik.getFieldProps("firstName")}
          {...formik.getFieldProps("firstName")}
        />{" "}
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500"> {formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter Your Lastname..."
          className="p-4 rounded-md border border-gray-100 outline-none"
          {...formik.getFieldProps("lastName")}
        />{" "}
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-500"> {formik.errors.lastName}</div>
        ) : null}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </div>
      {/* <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="job">Your Job</label>
          <Field
            name="job"
            className="p-4 rounded-md border border-gray-100 outline-none"
            as="select"
          >
 
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div> */}

      {/* <div className="flex items-center gap-2 mb-5">
          <Field
            name="term"
            type="checkbox"
            className="p-4 rounded-md border border-gray-100 outline-none"
          ></Field>
          <p> I accept the terms and conditions</p>
          <div className="text-sm text-red-500">
            <ErrorMessage name="term"></ErrorMessage>
          </div>
        </div> */}
    </form>
  );
};

export default SignUpForm;
