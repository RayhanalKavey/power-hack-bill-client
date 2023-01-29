import { format } from "date-fns";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import AddNewBillModal from "../../COMPONENTS/AddNewBillModal/AddNewBillModal";
import ConfirmationModal from "../../COMPONENTS/ConfirmationModal/ConfirmationModal";
import { useBill } from "../../CONTEXT/BillProvider/BillProvider";
import useTitle from "../../HOOKS/useTitle/useTitle";

const Bills = () => {
  useTitle("Billing List");
  const { bills, isLoading, refetch, clsModal } = useBill();

  //Generic modal
  const [billModal, setBillModal] = useState(null);

  const closeModal = () => {
    setBillModal(null);
  };

  // delete bills --4
  const handleDeleteBill = (bill) => {
    fetch(`${process.env.REACT_APP_api_url}/delete-billing/${bill?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success > 0) {
          toast.success(`Bill deleted successfully.`);
          refetch();
        }
      });
  };

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
            ?.sort((x, y) => y?.currentDate - x?.currentDate)
            .map((bill) => (
              <tr key={bill?._id}>
                <td>{bill?._id}</td>
                {/* <td>{bill?.randomId}</td> */}

                <td>{bill?.name}</td>
                <td> {bill?.email}</td>
                <td> {bill?.phone}</td>
                <td> {bill?.paid}</td>
                <td>
                  {" "}
                  <button className="btn btn-xs btn-accent">Edit</button>{" "}
                  <label
                    className="btn btn-xs btn-error"
                    htmlFor="confirmation-modal"
                    onClick={() => setBillModal(bill)}
                  >
                    Delete
                  </label>
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
      {clsModal && <AddNewBillModal />}
      {billModal && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`Deleting of bill cannot be undone.`}
          closeModal={closeModal}
          successButtonName="Delete"
          successAction={handleDeleteBill}
          modalData={billModal}
        ></ConfirmationModal>
      )}
    </>
  );
};

export default Bills;
