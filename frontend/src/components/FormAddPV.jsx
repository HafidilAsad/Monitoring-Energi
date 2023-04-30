import React from "react";
import axios from "axios";
import { useState } from "react";

import "../components/css/formaddpv.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
//import "react-notifications-component/dist/theme.css";

const FormAddPV = () => {
  const [nilaipv, setNilaipv] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [totalcostmin1, setTotalcostmin1] = useState("");
  const [totalcostmin2, setTotalcostmin2] = useState("");
  const [totalcostmin3, setTotalcostmin3] = useState("");
  const [totalcostmin4, setTotalcostmin4] = useState("");
  const [nilaipvmin1, setNilaipvmin1] = useState("");
  const [nilaipvmin2, setNilaipvmin2] = useState("");
  const [nilaipvmin3, setNilaipvmin3] = useState("");
  const [nilaipvmin4, setNilaipvmin4] = useState("");
  const [nilaipvmin5, setNilaipvmin5] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pvnewmin5");
        setNilaipvmin5(parseFloat(response.data[0].nilaipv.replace(/\./g, "")));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pvnewmin4");
        setNilaipvmin4(parseFloat(response.data[0].nilaipv.replace(/\./g, "")));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pvnewmin4");
        setNilaipvmin4(parseFloat(response.data[0].nilaipv.replace(/\./g, "")));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pvnewmin3");
        setNilaipvmin3(parseFloat(response.data[0].nilaipv.replace(/\./g, "")));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pvnewmin2");
        setNilaipvmin2(parseFloat(response.data[0].nilaipv.replace(/\./g, "")));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pvnewmin1");
        setNilaipvmin1(parseFloat(response.data[0].nilaipv.replace(/\./g, "")));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/utilitycostnewmin4"
        );
        setTotalcostmin4(
          parseFloat(response.data[0].total_cost.replace(/\./g, ""))
        ); // Mengubah string menjadi number dan menghapus tanda titik pada string
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/utilitycostnewmin3"
        );
        setTotalcostmin3(
          parseFloat(response.data[0].total_cost.replace(/\./g, ""))
        ); // Mengubah string menjadi number dan menghapus tanda titik pada string
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/utilitycostnewmin2"
        );
        setTotalcostmin2(
          parseFloat(response.data[0].total_cost.replace(/\./g, ""))
        ); // Mengubah string menjadi number dan menghapus tanda titik pada string
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/utilitycostnewmin1"
        );
        setTotalcostmin1(
          parseFloat(response.data[0].total_cost.replace(/\./g, ""))
        ); // Mengubah string menjadi number dan menghapus tanda titik pada string
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/utilitycostnew"
        );
        setTotalCost(
          parseFloat(response.data[0].total_cost.replace(/\./g, ""))
        ); // Mengubah string menjadi number dan menghapus tanda titik pada string
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const saveNilaipv = async (e) => {
    e.preventDefault();

    try {
      let persentaseutilitycost = 0; // Initialize persentaseutilitycost
      if (
        nilaipvmin1 === 0 &&
        nilaipvmin2 === 0 &&
        nilaipvmin3 === 0 &&
        nilaipvmin4 === 0
      ) {
        persentaseutilitycost =
          ((totalCost +
            totalcostmin1 +
            totalcostmin2 +
            totalcostmin3 +
            totalcostmin4) /
            ((nilaipv - nilaipvmin5) * 1000000)) *
          100;
      } else if (nilaipvmin1 === 0 && nilaipvmin2 === 0 && nilaipvmin3 === 0) {
        persentaseutilitycost =
          ((totalCost + totalcostmin1 + totalcostmin2 + totalcostmin3) /
            ((nilaipv - nilaipvmin4) * 1000000)) *
          100;
      } else if (nilaipvmin1 === 0 && nilaipvmin2 === 0) {
        persentaseutilitycost =
          ((totalCost + totalcostmin1 + totalcostmin2) /
            ((nilaipv - nilaipvmin3) * 1000000)) *
          100;
      } else if (nilaipvmin1 === 0) {
        persentaseutilitycost =
          ((totalCost + totalcostmin1) / ((nilaipv - nilaipvmin2) * 1000000)) *
          100;
      } else {
        persentaseutilitycost =
          (totalCost / ((nilaipv - nilaipvmin1) * 1000000)) * 100;
      }
      await axios.post("http://localhost:5000/pvs", {
        nilaipv,
        persen_utilitycost: persentaseutilitycost.toFixed(1),
      });
      console.log("PV saved successfully");
      toast.success("PV saved successfully", {
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Data Gagal disimpan", { autoClose: 2000 });
    }
  };

  return (
    <div>
      <div className="pt-1">
        <br />
        <h1 className="title is-size-5">Form Input PV </h1>
        <div className="card is-shadowless">
          <div className="card-content">
            <div className="content">
              <form onSubmit={saveNilaipv}>
                <div className="field">
                  <label className="label"> Nilai PV</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="nilai pv"
                      value={nilaipv}
                      onChange={(e) => setNilaipv(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field ">
                  <div className="control">
                    <button
                      className="button is-success is-normal"
                      name="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddPV;
