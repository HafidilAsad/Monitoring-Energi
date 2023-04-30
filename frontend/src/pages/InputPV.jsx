import React from "react";
import Layout from "./Layout";
import FormAddPV from "../components/FormAddPV";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputPV = () => {
  return (
    <div>
      <Layout>
        <ToastContainer />
        <FormAddPV />
      </Layout>
    </div>
  );
};

export default InputPV;
