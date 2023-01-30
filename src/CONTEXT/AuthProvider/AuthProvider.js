import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

//----------------------------
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  ///leading state to prevent the reload log out issue
  const [loading, setLoading] = useState(true);

  const [reload, setReload] = useState(true);

  // //On auth state change. Observe user
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     console.log("Inside auth state change", currentUser);
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => unsubscribe();
  // }, [reload]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_api_url}/users`, {
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("power-token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // setClsModal(false);
        // refetch();
        // toast.success(`Bill is added successfully.`);
        // //Navigate user to the desired path
        // navigate("/bills");
      });
  }, []);

  const authInfo = {};

  //----------------------------
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
