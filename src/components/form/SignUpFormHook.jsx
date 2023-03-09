import React, { useEffect } from "react";
import { useForm, Controller, useController } from "react-hook-form";
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
    reset,
    resetField,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  //   console.log(errors);
  //   console.log(isSubmitting);
  //   console.log(isValid);
  //   console.log(isDirty);
  //   console.log(dirtyFields);
  //   console.log(control);
  const watchShowAge = watch("showAge", false);

  const onSubmit = async (data) => {
    if (isValid) {
      console.log("Send");
      console.log(data);
      // after succesfully submit form (e.g: call api and post data to server)
      // useEffect
      // const post = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
      // then reset form
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
      //   resetField("firstName");
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

  // Focus firstName when component render (load)
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleSetDemoData = () => {
    setValue("firstName", "Huy");
    setValue("lastName", "Lam");
    setValue("email", "huy@gmail.com");
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
        <label htmlFor="email">Email Addrews</label>
        {/* <MyInput
          name="email"
          id="email"
          placeholder="Enter your email"
          control={control}
        ></MyInput> */}
        <MyInput2
          name="email"
          id="email"
          placeholder="Enter your email"
          control={control}
        ></MyInput2>
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
      <div>
        <button
          className="p-3 bg-green-400 rounded-lg text-white"
          onClick={handleSetDemoData}
        >
          Demo Data
        </button>
      </div>
    </form>
  );
};

const MyInput = ({ control, ...props }) => {
  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <input
          // onChange, onBlue, name, value == {field}
          {...field}
          {...props}
          className="p-4 rounded-md border border-gray-300 outline-none"
        />
      )}
    ></Controller>
  );
};

// useController hook
const MyInput2 = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      // onChange, onBlue, name, value == {field}
      {...field}
      {...props}
      className="p-4 rounded-md border border-gray-300 outline-none"
    />
  );
};
export default SignUpFormHook;
