import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";

const BILL_CONTEXT = createContext();
const BillProvider = ({ children }) => {
  const { data, isLoading, refetch, isError, error, isFetching } = useQuery({
    queryKey: ["bills"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_api_url}/bills`);
      const data = await res.json();
      return data;
    },
  });
  // console.log(data);
  const value = { bills: data, refetch, isLoading };
  return (
    <BILL_CONTEXT.Provider value={value}>{children}</BILL_CONTEXT.Provider>
  );
};

export const useBill = () => {
  const context = useContext(BILL_CONTEXT);
  return context;
};

export default BillProvider;
