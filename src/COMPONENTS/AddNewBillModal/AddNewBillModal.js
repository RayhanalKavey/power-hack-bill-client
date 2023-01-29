import React from "react";

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
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          {/* /// */}
        </div>
      </div>
    </>
  );
};

export default AddNewBillModal;
