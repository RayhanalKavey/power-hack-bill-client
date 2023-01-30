import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";

const BILL_CONTEXT = createContext();
const BillProvider = ({ children }) => {
  // close Add bill modal
  const [clsModal, setClsModal] = useState(false);
  const [query, setQuery] = useState("");
  // console.log(query);
  function search(data) {
    return data?.filter(
      (item) =>
        item?.name.toLowerCase().includes(query) ||
        item?.email.toLowerCase().includes(query) ||
        item?.phone.toLowerCase().includes(query)
    );
  }

  // get bill data using react query
  const { data, isLoading, refetch, isError, error, isFetching } = useQuery({
    queryKey: ["bills"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_api_url}/billing-list`, {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("power-token"),
        },
      });
      const data = await res.json();
      return data;
    },
  });
  // console.log(data);
  const value = {
    bills: data?.data,
    refetch,
    isLoading,
    clsModal,
    setClsModal,
    query,
    setQuery,
    search,
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
