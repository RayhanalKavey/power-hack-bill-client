import React, { createContext, useContext } from "react";

const BILL_CONTEXT = createContext();
const BillProvider = ({ children }) => {
  // const { data, isLoading, refetch } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const res = await fetch(`${process.env.REACT_APP_api_url}/products`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const value = { test: "TEST" };
  return (
    <BILL_CONTEXT.Provider value={value}>{children}</BILL_CONTEXT.Provider>
  );
};

export const useBill = () => {
  const context = useContext(BILL_CONTEXT);
  return context;
};

export default BillProvider;
