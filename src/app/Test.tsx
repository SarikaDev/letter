"use client";
import React, { useCallback } from "react";
import { toast } from "react-toastify";

const Test = () => {
  const toastMe = useCallback(() => {
    toast.success("hey");
  }, []);
  return (
    <div>
      <button onClick={toastMe}>Notify!</button>
    </div>
  );
};

export default Test;
