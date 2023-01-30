import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useBill } from "../../CONTEXT/BillProvider/BillProvider";

const EditBillForm = ({ bill }) => {
  const { refetch, setClsModal } = useBill();

  // React hook form user form and error
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleUpdateBill = (data) => {
    console.log("bill", bill);
    const { paid, name, email, phone } = data;
    const currentDate = Date.now();
    const randomId = Math.floor(Math.random() * 100000000000);
    const finalBill = { paid, name, email, phone, currentDate, randomId };

    // /// --2 save product information to the database
    fetch(`${process.env.REACT_APP_api_url}/update-billing/${bill?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalBill),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result?.success) {
          setClsModal(false);
          toast.success(result?.message);
          refetch();
          navigate("/bills");
        }
      });
    //-----
  };
  return (
    <>
      <div className="w-full p-2 ">
        {" "}
        <h1 className="text-3xl my-2 text-center">Add Bill</h1>
        {/* handleSubmit with react hook form */}
        <form onSubmit={handleSubmit(handleUpdateBill)}>
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
              defaultValue={bill?.name}
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
              defaultValue={bill?.email}
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
              defaultValue={bill?.phone}
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
              defaultValue={bill?.paid}
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
        </form>
      </div>
    </>
  );
};

export default EditBillForm;
