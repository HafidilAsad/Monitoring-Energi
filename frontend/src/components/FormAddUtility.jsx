import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormAddUtility = () => {
  //const [listrik_usage, setlistrik_usage] = useState("");
  const [gas_usage, setgas_usage] = useState("");
  //const [gasamount, setGasamount] = useState("");
  const [air_usage, setair_usage] = useState("");
  //const [airamount, setAiramount] = useState("");
  const [wbp, setWbp] = useState("");
  const [lwbp1, setLwbp1] = useState("");
  const [lwbp2, setLwbp2] = useState("");

  const calculateListrikUsage = () => {
    const wbpCost = parseFloat(wbp) * 1553.67;
    const lwbp1Cost = parseFloat(lwbp1) * 1035.78;
    const lwbp2Cost = parseFloat(lwbp2) * 1035.78;
    const totalCost = wbpCost + lwbp1Cost + lwbp2Cost;
    const ppn = totalCost * 0.03;
    const totalCostWithPPN = totalCost + ppn;
    return totalCostWithPPN.toFixed(); // return the value with 2 decimal points
  };

  const saveUtility = async (e) => {
    e.preventDefault();
    try {
      // kalo mau ada Rp nya
      // const listrik_usage_rupiah = listrik_usage_final.toLocaleString("id-ID", {
      //   style: "currency",
      //   currency: "IDR",
      // });

      //konversi gas ke rupiah
      const gas_usage_divided =
        (Number(gas_usage) / 27.2203879834687) * 9.16 * 16000;
      const gas_usage_rupiah = gas_usage_divided.toLocaleString("id-ID");

      //konversi air ke rupiah
      const air_usage_divided = Number(air_usage) * 12550;
      const air_usage_rupiah = air_usage_divided.toLocaleString("id-ID");

      const listrikUsage = calculateListrikUsage();
      const formattedListrikUsage =
        parseInt(listrikUsage).toLocaleString("id-ID");
      //const listrik_usage_rupiah = listrikUsage.toLocaleString("id-ID");
      const totalCost =
        parseInt(listrikUsage) +
        parseInt(gas_usage_divided) +
        parseInt(air_usage_divided);
      // console.log(
      //   formattedListrikUsage,
      //   gas_usage_divided,
      //   air_usage_divided,
      //   totalCost
      // );
      const total_cost_rupiah = totalCost.toLocaleString("id-ID");

      await axios.post("http://localhost:5000/utilitycosts", {
        listrik_usage: formattedListrikUsage,
        gas_usage: gas_usage_rupiah,
        air_usage: air_usage_rupiah,
        total_cost: total_cost_rupiah,
      });
      //setStatus("success");

      toast.success("Input value saved successfully", {
        autoClose: 500,
      });
    } catch (error) {
      console.log(error);
      toast.error("Data Gagal disimpan", { autoClose: 500 });
    }
  };

  return (
    <div className="pt-1">
      <br />
      <h1 className="title is-size-5">Form Input Utility </h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUtility}>
              <label className="label"> LISTRIK (KWH)</label>
              <div className="field-body">
                <div className="field">
                  <label className="label"> WBP</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="WBP"
                      value={wbp}
                      onChange={(e) => setWbp(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label"> LWBP1</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="LWBP1"
                      value={lwbp1}
                      onChange={(e) => setLwbp1(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label"> LWBP2</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="LWBP2"
                      value={lwbp2}
                      onChange={(e) => setLwbp2(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <br />
              <label className="label"> GAS (mmbtu)</label>
              <div className="field-body">
                <div className="field">
                  <label className="label"> Usage</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Usage"
                      value={gas_usage}
                      onChange={(e) => setgas_usage(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <br />
              <label className="label"> Air (M³)</label>
              <div className="field-body">
                <div className="field">
                  <label className="label"> Usage</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Usage"
                      value={air_usage}
                      onChange={(e) => setair_usage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="field ">
                <div className="control">
                  <button className="button is-success is-normal">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddUtility;
