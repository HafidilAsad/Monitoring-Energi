import React from "react";
import LayoutGas from "./LayoutGas";
import Clock from "../components/Clock";
import CurrentDate from "../components/CurrentDate";
import logo from "../logo.png";
import ChartStriko1 from "../components/ChartStriko1";
import ChartStriko2 from "./ChartStriko2";
import ChartStriko3 from "../components/ChartStriko3";
import ChartSwiftAsia from "../components/ChartSwiftAsia";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { IoNotificationsOutline } from "react-icons/io5";
import "../components/css/welcome.css";

const Gas = () => {
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

    const intervalId = setInterval(fetchData, 10000); // Fetch data every 5 seconds

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

    const intervalId = setInterval(fetchData, 10000); // Fetch data every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);
  // const boxStyles = {
  //   backgroundColor: "#2986cc", // light blue
  // };
  // const cardStyles = {
  //   backgroundColor: "#2986cc",
  // };

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
          "http://localhost:5000/akhirharikemarinswiftasia"
        );
        const gasConsumptions = response.data.map((gas) => gas.gas_consumption);
        setGas_kemarin_swiftasia(gasConsumptions);
      } catch (error) {
        console.error(error);
      }
    };
    getGas_kemarin_swiftasia();
  }, []);

  //console.log(gas_kemarin);

  //untuk Fungsi Notifikasi
  const [showModal, setShowModal] = useState(false);
  const [badgeNumber, setBadgeNumber] = useState(1);
  const [pesanNotifikasi, setPesanNotifikasi] = useState([]);

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
  return (
    <LayoutGas>
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
      {/* <div className="box is-3 is-info" style={boxStyles}>
        <h1 className="has-text-centered has-text-weight-bold is-family-monospace is-size-5 has-text-white">
          MONITORING GAS LNG
        </h1>
      </div> */}
      <br />
      <div className="columns">
        <div className="column">
          <div className="card is-danger pl-2 ">
            <div
              className="card-header"
              style={{ borderLeft: "5px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-5 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">STRIKO 1</span>
              </p>
            </div>
            {report
              .filter(({ id }) => id === 1)
              .map((item) => (
                <h1
                  className="has-text-black  has-text-centered has-text-grey "
                  style={{ fontSize: "83px" }}
                >
                  {item.gas_used} <span className="is-size-3">m³/h</span>
                </h1>
              ))}
            <p
              className="has-text-centered has-text-grey is-size-7"
              style={{ textAlign: "center" }}
            >
              Realtime Data
            </p>
          </div>
        </div>
        <div className="column is-three-fifths">
          <div
            className="card is-danger "
            style={{
              //   borderTop: "5px solid #db3737",
              borderLeft: "5px solid #2986cc",
            }}
          >
            <div className="card-content">
              <ChartStriko1 />
            </div>
          </div>
        </div>
        <div className="column">
          <div
            className="card is-danger "
            // style={{ border: "1px solid #2986cc" }}
          >
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                {report
                  .filter(({ id }) => id === 1)
                  .map((item) => (
                    <span className="is-block has-text-centered">
                      FLOW = {item.gas_used} m³/h
                    </span>
                  ))}
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                {report
                  .filter(({ id }) => id === 1)
                  .map((item) => (
                    <span className="is-block has-text-centered">
                      USED = {item.gas_consumption - gas_kemarin} m³
                    </span>
                  ))}
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">
                  TOTAL CHARGING = {totalChargingStriko1} kg
                </span>
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                {totalChargingStriko1 !== 0 ? (
                  report
                    .filter(({ id }) => id === 1)
                    .map((item) => (
                      <span className="is-block has-text-centered">
                        CONSUMPTION ={" "}
                        {(
                          ((item.gas_consumption - gas_kemarin) /
                            totalChargingStriko1) *
                          1000
                        ).toFixed(1)}{" "}
                        m³/Ton
                      </span>
                    ))
                ) : (
                  <span className="is-block has-text-centered">
                    CONS = BELUM PREPARATION
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="card is-danger pl-2 ">
            <div
              className="card-header"
              style={{ borderLeft: "5px solid #2986cc" }}
            >
              <p
                className="card-header-title has-text-centered has-text-weight-bold is-family-monospace is-size-5 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">STRIKO 2</span>
              </p>
            </div>

            <h1
              className="has-text-black  has-text-centered has-text-grey "
              style={{ fontSize: "83px" }}
            >
              30 <span className="is-size-3">m³/h</span>
            </h1>
            <p
              className="has-text-centered has-text-grey is-size-7"
              style={{ textAlign: "center" }}
            >
              Realtime Data
            </p>
          </div>
        </div>
        <div className="column is-three-fifths">
          <div
            className="card is-danger "
            style={{
              //   borderTop: "5px solid #db3737",
              borderLeft: "5px solid #2986cc",
            }}
          >
            <div className="card-content">
              <ChartStriko2 />
            </div>
          </div>
        </div>
        <div className="column">
          <div
            className="card is-danger "
            // style={{ border: "1px solid #2986cc" }}
          >
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                {report
                  .filter(({ id }) => id === 2)
                  .map((item) => (
                    <span className="is-block has-text-centered">
                      FLOW = {item.gas_used} m³/h
                    </span>
                  ))}
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                {report
                  .filter(({ id }) => id === 2)
                  .map((item) => (
                    <span className="is-block has-text-centered">
                      USED = {item.gas_consumption} m³
                    </span>
                  ))}
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">
                  TOTAL CHARGING = {totalChargingStriko2} kg
                </span>
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">
                  CONSUMPTION = 60 m³/ton
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="card is-danger pl-2 ">
            <div
              className="card-header"
              style={{ borderLeft: "5px solid #2986cc" }}
            >
              <p
                className="card-header-title has-text-centered has-text-weight-bold is-family-monospace is-size-5 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">STRIKO 3</span>
              </p>
            </div>
            <h1
              className="has-text-black  has-text-centered  has-text-grey "
              style={{ fontSize: "83px" }}
            >
              35 <span className="is-size-3">m³/h</span>
            </h1>
            <p
              className="has-text-centered has-text-grey is-size-7"
              style={{ textAlign: "center" }}
            >
              Realtime Data
            </p>
          </div>
        </div>
        <div className="column is-three-fifths">
          <div
            className="card is-danger "
            style={{
              //   borderTop: "5px solid #db3737",
              borderLeft: "5px solid #2986cc",
            }}
          >
            <div className="card-content">
              <ChartStriko3 />
            </div>
          </div>
        </div>
        <div className="column">
          <div
            className="card is-danger "
            // style={{ border: "1px solid #2986cc" }}
          >
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                {report
                  .filter(({ id }) => id === 3)
                  .map((item) => (
                    <span className="is-block has-text-centered">
                      FLOW = {item.gas_used} m³/h
                    </span>
                  ))}
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                {report
                  .filter(({ id }) => id === 3)
                  .map((item) => (
                    <span className="is-block has-text-centered">
                      USED = {item.gas_consumption} m³
                    </span>
                  ))}
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">
                  TOTAL CHARGING = {totalChargingStriko3} kg
                </span>
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">
                  CONSUMPTION = 65 m³/ton
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="card is-danger pl-2 ">
            <div
              className="card-header"
              style={{ borderLeft: "5px solid #2986cc" }}
            >
              <p
                className="card-header-title has-text-centered has-text-weight-bold is-family-monospace is-size-5 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">SWIFT ASIA</span>
              </p>
            </div>
            {report
              .filter(({ id }) => id === 4)
              .map((item) => (
                <h1
                  className="has-text-black  has-text-centered  has-text-grey "
                  style={{ fontSize: "83px" }}
                >
                  {item.gas_used}
                  <span className="is-size-3">m³/h</span>
                </h1>
              ))}
            <p
              className="has-text-centered has-text-grey is-size-7"
              style={{ textAlign: "center" }}
            >
              Realtime Data
            </p>
          </div>
        </div>
        <div className="column is-three-fifths">
          <div
            className="card is-danger "
            style={{
              //   borderTop: "5px solid #db3737",
              borderLeft: "5px solid #2986cc",
            }}
          >
            <div className="card-content">
              <ChartSwiftAsia />
            </div>
          </div>
        </div>
        <div className="column">
          <div
            className="card is-danger "
            // style={{ border: "1px solid #2986cc" }}
          >
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                {report
                  .filter(({ id }) => id === 4)
                  .map((item) => (
                    <span className="is-block has-text-centered">
                      FLOW = {item.gas_used} m³/h
                    </span>
                  ))}
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                {report
                  .filter(({ id }) => id === 4)
                  .map((item) => (
                    <span className="is-block has-text-centered">
                      USED = {item.gas_consumption - gas_kemarin_swiftasia} m³
                    </span>
                  ))}
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">
                  TOTAL CHARGING = {totalChargingSwiftAsia} kg
                </span>
              </p>
            </div>
            <div
              className="card-header"
              style={{ borderBottom: "1px solid #2986cc" }}
            >
              <p
                className="card-header-title has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
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
                        <span
                          className={`is-block has-text-centered ${
                            isBlinking ? "blink" : ""
                          }`}
                        >
                          CONSUMPTION = {consumption_swiftasia} m³/ton
                        </span>
                      );
                    })
                ) : (
                  <span className="is-block has-text-centered">
                    CONS = BELUM PREPARATION
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutGas>
  );
};

export default Gas;
