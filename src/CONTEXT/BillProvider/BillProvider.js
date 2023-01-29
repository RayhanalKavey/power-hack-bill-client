import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";

const BILL_CONTEXT = createContext();
const BillProvider = ({ children }) => {
  // close Add bill modal
  const [clsModal, setClsModal] = useState(false);

  // get bill data using react query
  const { data, isLoading, refetch, isError, error, isFetching } = useQuery({
    queryKey: ["bills"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_api_url}/billing-list`);
      const data = await res.json();
      return data;
    },
  });
  console.log(data);
  const value = {
    bills: data?.data,
    refetch,
    isLoading,
    clsModal,
    setClsModal,
  };
  return (
    <BILL_CONTEXT.Provider value={value}>{children}</BILL_CONTEXT.Provider>
  );
};

export const useBill = () => {
  const context = useContext(BILL_CONTEXT);
  return context;
};

export default BillProvider;
