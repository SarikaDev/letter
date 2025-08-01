"use client";

import { ToastContainer } from "react-toastify";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default AuthProvider;
