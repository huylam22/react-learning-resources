import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

/// **** React Hook Form ****

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please Enter Your First Name")
    .max(10, "Must be 10 characters or less"),
  lastName: Yup.string().required().max(10),
  email: Yup.string().required().email(),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  //   console.log(errors);
  //   console.log(isSubmitting);
  //   console.log(isValid);
  //   console.log(isDirty);
  console.log(dirtyFields);
  const watchShowAge = watch("showAge", false);

  const onSubmit = async (data) => {
    if (isValid) {
      console.log("Send");
      // after succesfully submit form
      // then reset form
    }
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(data);
    //   }, 2000);
    // });
    // const response = await axios.get(
    //   `https://hn.algolia.com/api/v1/search?query=react`
    // );
    // return response.data;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter Your Firstname..."
          className="p-4 rounded-md border border-gray-300 outline-none"
          //   defaultValue="Huy"
          //   {...register("firstName", { required: true, maxLength: 10 })} // Default --- Khong dung yup
          {...register("firstName")}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter Your Lastname..."
          className="p-4 rounded-md border border-gray-300 outline-none"
          {...register("lastName")}
        />
        {errors?.lastName && (
          <div className="text-red-500 text-sm">{errors.lastName?.message}</div>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="lastName">Email Addrews</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email Adress..."
          className="p-4 rounded-md border border-gray-300 outline-none"
          {...register("email")}
        />
        {errors?.email && (
          <div className="text-red-500 text-sm">{errors.email?.message}</div>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-5 items-start">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input
            type="number"
            placeholder="Please Enter Your Age"
            className="w-full"
          />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 rounded-full border-white border-2 border-r-transparent animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
