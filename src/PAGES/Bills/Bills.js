import { format } from "date-fns";
import React from "react";
import { useBill } from "../../CONTEXT/BillProvider/BillProvider";
import useTitle from "../../HOOKS/useTitle/useTitle";

const Bills = () => {
  useTitle("Billing List");
  const { bills, isLoading } = useBill();
  // console.log(bills);
  const currentDate = format(new Date(2014, 1, 11), "MM/dd/yyyy");
  // console.log(currentDate);

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
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
    </div>
  );
};

export default Bills;
