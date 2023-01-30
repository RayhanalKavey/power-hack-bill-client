import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full bg-slate-100 py-10">
      <div>
        <div className="w-8 h-8 relative border-4 border-separate rounded-full animate-spin   border-primary">
          {" "}
          <div className="h-4 w-1 absolute left-2 bottom-6 border-4 border-separate rounded-full animate-pulse mt-5 border-purple-700"></div>{" "}
          <div className="h-4 w-1 absolute left-2 -bottom-4 border-4 border-separate rounded-full animate-pulse mt-5 border-primary"></div>{" "}
          <div className="h-1 w-4 absolute left-6 bottom-2 border-4 border-separate rounded-full animate-pulse mt-5 border-purple-700"></div>{" "}
          <div className="h-1 w-4 absolute -left-4 bottom-2 border-4 border-separate rounded-full animate-pulse mt-5 border-primary"></div>{" "}
          <div className="h-12 w-12 absolute -left-3 -bottom-3 border-4 border-dashed rounded-full animate-spin mt-5 border-purple-700"></div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Spinner;
