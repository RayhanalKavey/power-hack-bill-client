import React from "react";
import { useBill } from "../../CONTEXT/BillProvider/BillProvider";
import useTitle from "../../HOOKS/useTitle/useTitle";

const Bills = () => {
  useTitle("Billing List");
  const { test } = useBill();
  return <div>{test}</div>;
};

export default Bills;
