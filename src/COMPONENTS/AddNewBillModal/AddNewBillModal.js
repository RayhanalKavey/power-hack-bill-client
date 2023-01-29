import React from "react";
import AddNewBillForm from "./AddNewBillForm";

const AddNewBillModal = () => {
  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="add-new-bill" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add-new-bill"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* /// */}
          <AddNewBillForm />
          {/* /// */}
        </div>
      </div>
    </>
  );
};

export default AddNewBillModal;
