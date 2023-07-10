import React from "react";
import LayoutTV from "../components/LayoutTV";
import logo from "../logo.png";
import CurrentDate from "../components/CurrentDate";
import Clock from "../components/Clock";
import { IoNotificationsOutline } from "react-icons/io5";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ChartTVMeltingStriko1 from "../components/ChartTVMeltingStriko1";
import ChartTVMeltingSwiftAsia from "../components/ChartTVMeltingSwiftAsia";
import RunningText from "../components/RunningText";
import "../components/css/welcome.css";

import "react-toastify/dist/ReactToastify.css";

const TVMelting = () => {
  //Mengambil Data LHP Charging
  const [totalChargingStriko1, setTotalChargingStriko1] = useState(0);
  const [totalChargingStriko2, setTotalChargingStriko2] = useState(0);
  const [totalChargingStriko3, setTotalChargingStriko3] = useState(0);
  const [totalChargingSwiftAsia, setTotalChargingSwiftAsia] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10); // Get current date in ISO format
        const response = await axios.get(
          "http://10.14.20.212:3551/api/lhpChargingStriko1"
        );
        const filteredData = response.data.filter(
          (item) => item.tanggal === today
        );
        const totalChargingStriko1 =
          filteredData.length > 0 ? filteredData[0].total_charging_rs : 0;
        setTotalChargingStriko1(totalChargingStriko1);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10); // Get current date in ISO format
        const response = await axios.get(
          "http://10.14.20.212:3551/api/lhpChargingStriko2"
        );
        const filteredData = response.data.filter(
          (item) => item.tanggal === today
        );
        const totalChargingStriko2 =
          filteredData.length > 0 ? filteredData[0].total_charging_rs : 0;
        setTotalChargingStriko2(totalChargingStriko2);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10); // Get current date in ISO format
        const response = await axios.get(
          "http://10.14.20.212:3551/api/lhpChargingStriko3"
        );
        const filteredData = response.data.filter(
          (item) => item.tanggal === today
        );
        const totalChargingStriko3 =
          filteredData.length > 0 ? filteredData[0].total_charging_rs : 0;
        setTotalChargingStriko3(totalChargingStriko3);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10); // Get current date in ISO format
        const response = await axios.get(
          "http://10.14.20.212:3551/api/lhpChargingSwiftAsia"
        );
        const filteredData = response.data.filter(
          (item) => item.tanggal === today
        );
        const totalChargingSwiftAsia =
          filteredData.length > 0 ? filteredData[0].total_charging_rs : 0;
        setTotalChargingSwiftAsia(totalChargingSwiftAsia);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  //=========================================================================================
  const [report, setReport] = useState([]);
  //mengambil data realtime dari sensor
  useEffect(() => {
    const getReports = async () => {
      const result = await axios.get("http://localhost:5000/striko1s");
      setReport(result.data);
    };

    // Memanggil getReports setiap 1 detik
    const intervalId = setInterval(() => {
      getReports();
    }, 500);

    // Membersihkan interval ketika komponen unmount
    return () => clearInterval(intervalId);
  }, []); // Menambahkan array dependensi kosong

  //Mengambil data gas_consumption kemarin
  const [gas_kemarin, setGas_kemarin] = useState([]);
  const [gas_kemarin_swiftasia, setGas_kemarin_swiftasia] = useState([]);

  useEffect(() => {
    const getGas_kemarin = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/akhirharikemarin"
        );
        const gasConsumptions = response.data.map((gas) => gas.gas_consumption);
        setGas_kemarin(gasConsumptions);
      } catch (error) {
        console.error(error);
      }
    };
    getGas_kemarin();
  }, []);

  useEffect(() => {
    const getGas_kemarin_swiftasia = async () => {
      try {
        const response = await axios.get(
          "http://10.14.51.17:5000/akhirharikemarinswiftasia"
        );
        const gasConsumptions = response.data.map((gas) => gas.gas_consumption);
        setGas_kemarin_swiftasia(gasConsumptions);
      } catch (error) {
        console.error(error);
      }
    };
    getGas_kemarin_swiftasia();
  }, []);
  //handle Notification
  const [showModal, setShowModal] = useState(false);
  const [badgeNumber, setBadgeNumber] = useState(1);
  const [pesanNotifikasi, setPesanNotifikasi] = useState([]);
  const [pesanNotifikasikemarin, setPesanNotifikasikemarin] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  //untuk Fungsi Notifikasi
  useEffect(() => {
    getPesanNotifikasiKemarin();
  }, []); // Empty dependency array to run the effect only once

  const getPesanNotifikasiKemarin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pesannotifikasi");
      setPesanNotifikasikemarin(response.data);
      if (response.data.length > 0) {
        // showToastNotification();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const showToastNotification = () => {
    toast.info("You have notifications from yesterday.", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
      hideProgressBar: true,
      closeButton: true,
    });
  };

  useEffect(() => {
    getPesanNotifikasi();
  });

  const getPesanNotifikasi = async () => {
    const response = await axios.get("http://localhost:5000/pesannotifikasi");
    setPesanNotifikasi(response.data);
  };

  function handleClick() {
    setShowModal(!showModal);
    setBadgeNumber(0);
  }

  const handleCheckboxChange = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/pesannotifikasi/${id}`);
      getPesanNotifikasi(); // Fetch updated notifications after deletion
    } catch (error) {
      console.log(error);
    }
  };

  const [chartMachine, setChartMachine] = useState("Striko1");

  const [selectedButton, setSelectedButton] = useState("Striko1");

  const handleButtonClick = (type) => {
    setChartMachine(type);
    setSelectedButton(type);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (chartMachine === "SwiftAsia") {
        handleButtonClick("Striko1");
      } else if (chartMachine === "Striko1") {
        handleButtonClick("Striko2");
      } else if (chartMachine === "Striko2") {
        handleButtonClick("Striko3");
      } else if (chartMachine === "Striko3") {
        handleButtonClick("SwiftAsia");
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [chartMachine]);

  return (
    <LayoutTV>
      <nav className="level is-info navbar">
        <div className="navbar-brand">
          <a
            href="/"
            className="navbar-item has-background-white"
            style={{ borderRadius: "0.9rem" }}
          >
            <img src={logo} width="112" height="28" alt="" />
          </a>

          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <p
          className="level-item has-text-centered has-text-centered is-flex justify-content-center  has-text-weight-bold is-family-sans-serif"
          style={{ fontSize: "20px" }}
        >
          MONITORING GAS LNG
        </p>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <div className="control">
                <div className="button is-info" href="">
                  <CurrentDate />
                </div>
              </div>
              <div className="control">
                <div className="button is-info" href="">
                  <Clock />
                </div>
              </div>

              <div className="icon pt-5" onClick={handleClick}>
                <IoNotificationsOutline
                  style={{ width: "25px", height: "25px" }}
                />
                <span className="topIconBadge">{badgeNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <ToastContainer />
      <div className={`modal  ${showModal ? "is-active " : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card ">
          <header className="modal-card-head is-fullwidth">
            <p className="modal-card-title">Notification</p>
            <button
              className="delete"
              aria-label="close"
              onClick={handleClick}
            ></button>
          </header>
          <section className="modal-card-body">
            <table className="table is-stripped is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Pesan Notifikasi</th>
                  <th>Tanggal</th>
                  <th>Ack</th>
                </tr>
              </thead>
              <tbody>
                {pesanNotifikasi
                  .sort((a, b) => b.id - a.id) // sort by id in descending order
                  .map((pesan, index) => (
                    <tr key={pesan.id}>
                      <td>{index + 1}</td>
                      <td>{pesan.pesan_notifikasi}</td>
                      <td>
                        {new Date(pesan.createdAt).toLocaleDateString("en-GB")}
                      </td>
                      <td>
                        <label className="checkbox">
                          <input
                            type="checkbox"
                            checked={false} // Replace with the corresponding checked state of the notification
                            onChange={() => handleCheckboxChange(pesan.id)}
                          />
                          Rec
                        </label>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-info">Ok</button>
            <button className="button" onClick={handleClick}>
              Cancel
            </button>
          </footer>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <div className="card">
            <label
              className="card-header is-size-5 pt-2 pb-2 pl-2  has-text-weight-bold is-family-monospace"
              style={{ borderLeft: "5px solid #2986cc" }}
            >
              STRIKO 1
            </label>
            {report
              .filter(({ id }) => id === 1)
              .map((item) => (
                <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
                  FLOW : {item.gas_used} m³/h
                </label>
              ))}
            {report
              .filter(({ id }) => id === 1)
              .map((item) => (
                <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
                  USED : {item.gas_consumption - gas_kemarin} m³
                </label>
              ))}
            <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
              TOTAL CHARGING : {totalChargingStriko1} kg
            </label>
            {totalChargingStriko1 !== 0 ? (
              report
                .filter(({ id }) => id === 1)
                .map((item) => {
                  const consumption = (
                    ((item.gas_consumption - gas_kemarin) /
                      totalChargingStriko1) *
                    1000
                  ).toFixed(1);
                  return (
                    <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace">
                      CONSUMPTION = {consumption} m³/ton
                      {consumption > 60 && <span className="ml-3 dot"></span>}
                    </label>
                  );
                })
            ) : (
              <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace">
                CONSUMPTION : Belum Preparation
              </label>
            )}
          </div>
        </div>
        <div className="column">
          <div className="card">
            <label
              className="card-header is-size-5 pt-2 pb-2 pl-2  has-text-weight-bold is-family-monospace "
              style={{ borderLeft: "5px solid #2986cc" }}
            >
              STRIKO 2
            </label>
            {report
              .filter(({ id }) => id === 2)
              .map((item) => (
                <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
                  FLOW : {item.gas_used} m³/h
                </label>
              ))}
            {report
              .filter(({ id }) => id === 2)
              .map((item) => (
                <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
                  USED : {item.gas_consumption} m³
                </label>
              ))}
            <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
              TOTAL CHARGING : {totalChargingStriko2} kg
            </label>
            <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace">
              CONSUMPTION : 60 m³/ton
            </label>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <label
              className="card-header is-size-5 pt-2 pb-2 pl-2  has-text-weight-bold is-family-monospace"
              style={{ borderLeft: "5px solid #2986cc" }}
            >
              STRIKO 3
            </label>
            {report
              .filter(({ id }) => id === 3)
              .map((item) => (
                <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
                  FLOW : 100 m³/h
                </label>
              ))}
            {report
              .filter(({ id }) => id === 3)
              .map((item) => (
                <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
                  USED : {item.gas_consumption}m³
                </label>
              ))}
            <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
              TOTAL CHARGING : {totalChargingStriko3} kg
            </label>
            <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace">
              CONSUMPTION : 70 m³/ton
            </label>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <label
              className="card-header is-size-5 pt-2 pb-2 pl-2  has-text-weight-bold is-family-monospace"
              style={{ borderLeft: "5px solid #2986cc" }}
            >
              SWIFT ASIA
            </label>
            {report
              .filter(({ id }) => id === 4)
              .map((item) => (
                <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
                  FLOW :{item.gas_used} m³/h
                </label>
              ))}
            {report
              .filter(({ id }) => id === 4)
              .map((item) => (
                <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
                  USED : {item.gas_consumption - gas_kemarin_swiftasia} m³
                </label>
              ))}
            <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ">
              TOTAL CHARGING : {totalChargingSwiftAsia} kg
            </label>
            {totalChargingSwiftAsia !== 0 ? (
              report
                .filter(({ id }) => id === 4)
                .map((item) => {
                  const consumption_swiftasia = (
                    ((item.gas_consumption - gas_kemarin_swiftasia) /
                      totalChargingSwiftAsia) *
                    1000
                  ).toFixed(1);
                  const isBlinking = consumption_swiftasia > 60;
                  return (
                    <label
                      className={`card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace ${
                        isBlinking ? "blinking-text" : ""
                      }`}
                    >
                      CONSUMPTION : {consumption_swiftasia} m³/ton
                    </label>
                  );
                })
            ) : (
              <label className="card-header is-size-6 pt-2 pb-2 pl-2  is-family-monospace">
                CONSUMPTION : Belum Preparation
              </label>
            )}
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-full">
          <div className="card">
            <div className="card-header">
              <div className="card-header-title has-background-info">
                <div className="select is-small">
                  <select>
                    <option>Graphic Perhari</option>
                    <option>Graphic Perbulan</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="columns">
                <div className="column is-fullwidth">
                  <div className="field">
                    <div className="group">
                      <div className="buttons">
                        <button
                          className={`button is-small is-primary${
                            selectedButton === "Striko1" ? " button-border" : ""
                          }`}
                          onClick={() => handleButtonClick("Striko1")}
                        >
                          Striko 1
                        </button>
                        <button
                          className={`button is-small is-primary${
                            selectedButton === "Striko2" ? " button-border" : ""
                          }`}
                          onClick={() => handleButtonClick("Striko2")}
                        >
                          Striko 2
                        </button>
                        <button
                          className={`button is-small is-primary${
                            selectedButton === "Striko3" ? " button-border" : ""
                          }`}
                          onClick={() => handleButtonClick("Striko3")}
                        >
                          Striko 3
                        </button>
                        <button
                          className={`button is-small is-primary${
                            selectedButton === "SwiftAsia"
                              ? " button-border"
                              : ""
                          }`}
                          onClick={() => handleButtonClick("SwiftAsia")}
                        >
                          Swift Asia
                        </button>
                      </div>
                    </div>
                    <br />
                    {chartMachine === "SwiftAsia" && (
                      <ChartTVMeltingSwiftAsia />
                    )}
                    {chartMachine === "Striko1" && <ChartTVMeltingStriko1 />}
                    {chartMachine === "Striko2" && <ChartTVMeltingSwiftAsia />}
                    {chartMachine === "Striko3" && <ChartTVMeltingStriko1 />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className=" has-background-white is-full-width has-text-weight-bold is-family-monospace">
            <RunningText />
          </div>
        </div>
      </div>
    </LayoutTV>
  );
};

export default TVMelting;
