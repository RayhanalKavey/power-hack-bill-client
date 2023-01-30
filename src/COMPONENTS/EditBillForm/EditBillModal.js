import React from "react";
import EditBillForm from "./EditBillForm";

const EditBillModal = ({ bill }) => {
  // console.log(bill);
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="edit-bill" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="edit-bill"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* /// */}
          <EditBillForm bill={bill} />
          {/* /// */}
        </div>
      </div>
    </>
  );
};

export default EditBillModal;
