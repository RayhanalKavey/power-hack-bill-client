import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../HOOKS/useTitle/useTitle";
const Registration = () => {
  useTitle("Registration");

  // React hook form user form and error
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUpError] = useState("");

  // Redirect user where they want to go
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegistration = (data) => {
    // const { name, email, password } = data;
    setSignUpError("");
    // console.log(data);
    //Add user to the server
    fetch(`${process.env.REACT_APP_api_url}/registration`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.success) {
          navigate(from, { replace: true });
          toast.success(result.message);
        }
      });
  };
  return (
    <div className="flex items-center justify-center h-[800px] mx-5 my-12">
      <div className="w-96 p-7 custom_shadow rounded-lg">
        {" "}
        <h1 className="text-3xl my-5 text-center">Registration</h1>
        {/* handleSubmit with react hook form */}
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="form-control w-full max-w-xs">
            {/*---------- name ----------*/}
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required !" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your name"
            />
            {/* erroR message */}
            {errors.name && (
              <p className="text-error mt-1"> {errors.name?.message}</p>
            )}
            {/*-------------email------------- */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email address is required !",
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your email"
            />
            {/* Show email erroRs */}
            {errors.email && (
              <p className="text-error mt-1" role="alert">
                {errors.email?.message}
              </p>
            )}{" "}
            {/* ======================== */}
            {errors.accountType?.type === "required" && (
              <p className="text-error mt-1"> {errors.accountTypes?.message}</p>
            )}
            {/*---- Password----- */}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required !",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or longer.",
                },
                pattern: {
                  value: /(?=.*[A-Z].*[A-Z])(?=.*[!#@$%&? "])/,
                  message:
                    "Ensure password has two uppercase and one special case letter.",
                },
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="*********"
            />
            {/* Show password erroRs */}
            {errors.password && (
              <p className="text-error mt-1" role="alert">
                {errors.password?.message}
              </p>
            )}{" "}
          </div>

          <input
            className="btn btn-primary w-full mt-5 mb-1"
            type="submit"
            value="Submit"
          />
          {signUpError && (
            <label className="label">
              <span className="label-text-alt text-error">{signUpError}</span>
            </label>
          )}
        </form>
        <p className="text-center ">
          Already have an account?{" "}
          <Link className="text-primary" to={"/login"}>
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Registration;
