import { format } from "date-fns";
import React from "react";
import AddNewBillModal from "../../COMPONENTS/AddNewBillModal/AddNewBillModal";
import { useBill } from "../../CONTEXT/BillProvider/BillProvider";
import useTitle from "../../HOOKS/useTitle/useTitle";

const Bills = () => {
  useTitle("Billing List");
  const { bills, isLoading } = useBill();

  return (
    <>
      <table className="table table-compact  w-[95%] mx-auto mt-10 custom_shadow rounded-lg ">
        <thead className="">
          <tr>
            <th>Billing ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bills
            ?.sort((x, y) => y.currentDate?.localeCompare(x.currentDate))
            .map((bill) => (
              <tr key={bill?._id}>
                <td>{bill?._id}</td>
                {/* <td>{bill?.randomId}</td> */}

                <td>{bill.fullName}</td>
                <td> {bill.email}</td>
                <td> {bill.phone}</td>
                <td> {bill.payableAmount}</td>
                <td>
                  {" "}
                  <button className="btn btn-xs btn-accent">Edit</button>{" "}
                  <button className="btn btn-xs btn-error">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
        {/* <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </tfoot> */}
      </table>
      <div className="flex justify-center my-4">
        <div className="btn-group ">
          <button className="btn btn-sm">1</button>
          <button className="btn btn-sm btn-active">2</button>
          <button className="btn btn-sm">3</button>
          <button className="btn btn-sm">4</button>
        </div>
      </div>
      <AddNewBillModal />
    </>
  );
};

export default Bills;
