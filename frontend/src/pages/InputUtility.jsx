import React from "react";
import FormAddUtility from "../components/FormAddUtility";
import Layout from "./Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputUtility = () => {
  return (
    <div>
      <Layout>
        <ToastContainer />
        <FormAddUtility />
      </Layout>
    </div>
  );
};

export default InputUtility;
