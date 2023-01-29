import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useTitle from "../../HOOKS/useTitle/useTitle";
const Login = () => {
  useTitle("Login");

  // React hook form user form and error
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUpError] = useState("");

  // Redirect user where they want to go
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    const { email, password } = data;
    setSignUpError("");
    console.log(data);
    // navigate(from, { replace: true });
  };
  return (
    <div className="flex items-center justify-center h-[800px] mx-5 my-12">
      <div className="w-96 p-7 custom_shadow rounded-lg">
        {" "}
        <h1 className="text-3xl my-5 text-center">Login</h1>
        {/* handleSubmit with react hook form */}
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            {/*-------------email------------- */}
            {/*// Email */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email address is required!" })}
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
                required: "Password is required",
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your password"
            />
            {/* Show password erroRs */}
            {errors.password && (
              <p className="text-error mt-1">{errors.password?.message}</p>
            )}
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
          <Link className="text-primary" to={"/registration"}>
            Registration
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
