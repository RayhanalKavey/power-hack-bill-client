import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useBill } from "../../CONTEXT/BillProvider/BillProvider";

const AddNewBillForm = () => {
  const { refetch, setClsModal } = useBill();

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

  const handleAddBill = (data) => {
    const { paid, name, email, phone } = data;
    const currentDate = Date.now();
    const randomId = Math.floor(Math.random() * 100000000000);
    const finalBill = { paid, name, email, phone, currentDate, randomId };
    setSignUpError("");
    console.log(finalBill);
    // navigate(from, { replace: true });
    // /// --2 save product information to the database
    fetch(`${process.env.REACT_APP_api_url}/add-billing`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalBill),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setClsModal(false);
        refetch();
        toast.success(`Bill is added successfully.`);
        // //Navigate user to the desired path
        navigate("/bills");
      });
    //-----
  };
  return (
    <>
      <div className="w-full p-2 ">
        {" "}
        <h1 className="text-3xl my-2 text-center">Add Bill</h1>
        {/* handleSubmit with react hook form */}
        <form onSubmit={handleSubmit(handleAddBill)}>
          <div className="form-control w-full ">
            {/*---------- name ----------*/}
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required !" })}
              className="input input-bordered w-full "
              placeholder="Full name"
            />
            {/* erroR message */}
            {errors.name && (
              <p className="text-error mt-1"> {errors.name?.message}</p>
            )}
            {/*-------------email------------- */}
            {/*// Email */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email address is required!" })}
              className="input input-bordered w-full "
              placeholder="Email"
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
            {/*---- Phone----- */}
            <label className="label">
              <span className="label-text">Phone No.</span>
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required!",
                minLength: {
                  value: 11,
                  message: "Phone number must be 11 character!",
                },
              })}
              className="input input-bordered w-full "
              placeholder="Phone No."
            />
            {/* Show Phone number erroRs */}
            {errors.phone && (
              <p className="text-error mt-1">{errors.phone?.message}</p>
            )}
            {/*---- Paid amount----- */}
            <label className="label">
              <span className="label-text">Paid Amount</span>
            </label>
            <input
              type="number"
              {...register("paid", {
                required: "Paid amount is required!",
              })}
              className="input input-bordered w-full "
              placeholder="Paid amount"
            />
            {/* Show Paid amount erroRs */}
            {errors.paid && (
              <p className="text-error mt-1">{errors.paid?.message}</p>
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
      </div>
    </>
  );
};

export default AddNewBillForm;
