import React from "react";
import LayoutGas from "./LayoutGas";
import logo from "../logo.png";
import CurrentDate from "../components/CurrentDate";
import Clock from "../components/Clock";
import ChartStriko1ConsumptionPerTon from "./ChartStriko1ConsumptionPerTon";
import ChartStriko1Consumption from "./ChartStriko1Consumption";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import "../components/css/welcome.css";

const GasConsumption = () => {
  const [gas_kemarin, setGas_kemarin] = useState([]);
  const [sensor, setSensor] = useState([]);
  const [Yesterday, setYesterday] = useState([]);
  const [UsedYesterday, setUsedYesterday] = useState([]);
  const [consumpperbulanini, setConsumptionperbulanini] = useState(0);

  //Ambil data perbulan ini
  useEffect(() => {
    axios
      .get("http://localhost:5000/reportsperbulanini")
      .then((response) => {
        setConsumptionperbulanini(response.data.gasConsumptionSum);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  //Coba dulu Aja
  useEffect(() => {
    const fetchUsedYesterdayData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/reportsconsumptkemarin"
        );
        const usedyesterdayData = response.data.map((item) => item.gas_used);
        setUsedYesterday(usedyesterdayData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUsedYesterdayData();
  });

  //mengambil report data gas report M kubik
  useEffect(() => {
    const fetchYesterdayData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/reportsconsumptkemarin"
        );
        const yesterdayData = response.data.map((item) => item.gas_consumption);
        setYesterday(yesterdayData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchYesterdayData();
  });

  //mengambil data realtime dari sensor=====================================================
  useEffect(() => {
    const getSensor = async () => {
      const result = await axios.get("http://localhost:5000/striko1s");
      setSensor(result.data);
    };

    // Memanggil getSensor setiap 1 detik
    const intervalId = setInterval(() => {
      getSensor();
    }, 500);

    // Membersihkan interval ketika komponen unmount
    return () => clearInterval(intervalId);
  }, []);

  //Mengambil data gas sensor kemarin=========================================================
  useEffect(() => {
    getGas_kemarin();
  }, []);

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

  const now = new Date();
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();
  const percentagedate = Math.round((now.getDate() / daysInMonth) * 100);
  const percentage = 25;

  ////================== fungsi untuk notifikasi ===============================================

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
      <nav className="navbar has-background-light custom-padding">
        <div className="navbar-brand">
          <p className="navbar-item has-text-weight-bold has-text-underlined is-size-4">
            STRIKO 1
          </p>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div
                className="field is-grouped"
                style={{ borderBottom: "2px solid #2986cc" }}
              >
                <p className="control pb-1">
                  <a href="/gasconsumption" className="button is-primary">
                    <span>STRIKO 1</span>
                  </a>
                </p>
                <p className="control pb-1">
                  <a
                    href="/gasconsumptionstriko2"
                    className="button is-primary"
                  >
                    <span>STRIKO 2</span>
                  </a>
                </p>
                <p className="control pb-1">
                  <a
                    href="/gasconsumptionstriko3"
                    className="button is-primary"
                  >
                    <span>STRIKO 3</span>
                  </a>
                </p>
                <p className="control pb-1">
                  <a
                    href="/gasconsumptionswiftasia"
                    className="button is-primary"
                  >
                    <span>SWIFT ASIA</span>
                  </a>
                </p>
                <p className="control pb-1">
                  <a
                    href="/gasconsumptiongravity"
                    className="button is-primary"
                  >
                    <span>GRAVITY</span>
                  </a>
                </p>
                <p className="control pb-1">
                  <a href="/totalgas" className="button is-primary">
                    <span>TOTAL</span>
                  </a>
                </p>
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
                      <td className="has-text-weight-semibold">{index + 1}</td>
                      <td className="has-text-weight-semibold">
                        {pesan.pesan_notifikasi}
                      </td>
                      <td className="has-text-weight-semibold">
                        {new Date(pesan.createdAt).toLocaleDateString("en-GB")}
                      </td>
                      <td>
                        <label className="checkbox">
                          <input
                            type="checkbox"
                            checked={false} // Replace with the corresponding checked state of the notification
                            onChange={() => handleCheckboxChange(pesan.id)}
                            className="has-text-weight-semibold"
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

      <div className="columns m-1 ">
        <div className="column is-half has-background-white  ">
          <h1 className="subtitle has-text-centered has-text-weight-semibold is-family-sans-serif">
            Graphic Gas Consumption m³/Ton
          </h1>
          <ChartStriko1ConsumptionPerTon />
        </div>
        <div className="column is-half ">
          <div className="columns">
            <div className="column">
              <div
                className="card "
                style={{ borderBottom: "5px solid #2986cc" }}
              >
                <div className="card-header is-family-sans-serif pl-4">
                  Yesterday m³/Ton
                </div>
                <div className="card-content">
                  <div className="level">
                    <span className="has-text-centered has-text-weight-bold pt-4">
                      <br />
                      {Yesterday} m³/Ton
                    </span>
                    <div style={{ width: 70, height: 62 }}>
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={{
                          path: {
                            stroke: "#17a2b8", // change to info color
                            strokeLinecap: "round",
                            transition: "stroke-dashoffset 0.5s ease 0s",
                          },
                          trail: {
                            stroke: "#d6d6d6",
                            strokeLinecap: "round",
                          },
                          text: {
                            fill: "#17a2b8", // change to info color
                            fontSize: "20px",
                            dominantBaseline: "middle",
                            textAnchor: "middle",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div
                className="card "
                style={{ borderBottom: "5px solid #ffff66" }}
              >
                <div className="card-header  ">
                  <p className=" card-header-is-centered pl-4">
                    Yesterday (mmbtu)
                  </p>
                </div>
                <div className="card-content">
                  <div className="level">
                    <span className="has-text-centered has-text-weight-bold pt-4">
                      <br />
                      {(UsedYesterday / 27.3).toFixed(1)} mmbtu
                    </span>
                    <div style={{ width: 70, height: 62 }}>
                      {/* <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={{
                          path: {
                            stroke: "#17a2b8", // change to info color
                            strokeLinecap: "round",
                            transition: "stroke-dashoffset 0.5s ease 0s",
                          },
                          trail: {
                            stroke: "#d6d6d6",
                            strokeLinecap: "round",
                          },
                          text: {
                            fill: "#17a2b8", // change to info color
                            fontSize: "20px",
                            dominantBaseline: "middle",
                            textAnchor: "middle",
                          },
                        }}
                      ></CircularProgressbar> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div
                className="card "
                style={{ borderBottom: "5px solid #cc0033" }}
              >
                <div className="card-header is-family-sans-serif pl-4">
                  This Month m³
                </div>
                <div className="card-content">
                  <progress
                    className="progress is-danger"
                    value={percentagedate}
                    max="100"
                  >
                    90%
                  </progress>

                  <h1 className=" has-text-weight-bold ">
                    {consumpperbulanini} m³
                  </h1>
                </div>
              </div>
            </div>
            <div className="column">
              <div
                className="card "
                style={{ borderBottom: "5px solid #4fa663" }}
              >
                <div className="card-header is-family-sans-serif pl-4">
                  This Month (mmbtu)
                </div>
                <div className="card-content">
                  <progress
                    className="progress is-success"
                    value={percentagedate}
                    max="100"
                  >
                    90%
                  </progress>
                  <h1 className=" has-text-weight-bold ">
                    {(consumpperbulanini / 27.3).toFixed(1)} mmbtu
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns m-1 ">
        <div className="column is-half ">
          <div className="columns">
            <div className="column">
              <div
                className="card "
                style={{ borderBottom: "5px solid #2986cc" }}
              >
                <div className="card-header pl-4"> GAS USED TODAY (mmbtu)</div>
                <div className="card-content">
                  {/* <progress className="progress is-info" value="30" max="100">
                    30%
                  </progress> */}

                  <div className="level">
                    {sensor
                      .filter(({ id }) => id === 1)
                      .map((item) => (
                        <span className="has-text-centered has-text-weight-bold pt-4">
                          <br />
                          {(
                            (item.gas_consumption - gas_kemarin) /
                            27.2203879834687
                          ).toFixed(1)}
                          mmbtu
                        </span>
                      ))}
                    <div style={{ width: 70, height: 62 }}>
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={{
                          path: {
                            stroke: "#17a2b8", // change to info color
                            strokeLinecap: "round",
                            transition: "stroke-dashoffset 0.5s ease 0s",
                          },
                          trail: {
                            stroke: "#d6d6d6",
                            strokeLinecap: "round",
                          },
                          text: {
                            fill: "#17a2b8", // change to info color
                            fontSize: "20px",
                            dominantBaseline: "middle",
                            textAnchor: "middle",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div
                className="card "
                style={{ borderBottom: "5px solid #ffff66" }}
              >
                <div className="card-header pl-4">GAS USED TODAY (m³)</div>
                <div className="card-content">
                  {sensor
                    .filter(({ id }) => id === 1)
                    .map((item) => (
                      <progress
                        className="progress is-warning"
                        value={item.gas_consumption - gas_kemarin}
                        max="2000"
                      >
                        75%
                      </progress>
                    ))}
                  {sensor
                    .filter(({ id }) => id === 1)
                    .map((item) => (
                      <h1 className="is-size-6 has-text-weight-bold">
                        {item.gas_consumption - gas_kemarin} m³
                      </h1>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div
                className="card "
                style={{ borderBottom: "5px solid #cc0033" }}
              >
                <div className="card-header pl-4">FLOW IN SENSOR (m³/h)</div>
                <div className="card-content">
                  {sensor
                    .filter(({ id }) => id === 1)
                    .map((item) => (
                      <progress
                        className="progress is-danger"
                        value={item.gas_used}
                        max="100"
                      >
                        90%
                      </progress>
                    ))}
                  {sensor
                    .filter(({ id }) => id === 1)
                    .map((item) => (
                      <h1 className="is-size-6 has-text-weight-bold">
                        {item.gas_used} m³/h
                      </h1>
                    ))}
                </div>
              </div>
            </div>
            <div className="column">
              <div
                className="card "
                style={{ borderBottom: "5px solid #4fa663" }}
              >
                <div className="card-header pl-4">USED IN SENSOR (m³)</div>
                <div className="card-content">
                  <div className="level">
                    {sensor
                      .filter(({ id }) => id === 1)
                      .map((item) => (
                        <span className="has-text-centered has-text-weight-bold pt-4">
                          <br />
                          {item.gas_consumption} m³
                        </span>
                      ))}
                    <div style={{ width: 70, height: 62 }}>
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={{
                          path: {
                            stroke: "#28a745", // change to info color
                            strokeLinecap: "round",
                            transition: "stroke-dashoffset 0.5s ease 0s",
                          },
                          trail: {
                            stroke: "#d6d6d6",
                            strokeLinecap: "round",
                          },
                          text: {
                            fill: "#28a745", // change to info color
                            fontSize: "20px",
                            dominantBaseline: "middle",
                            textAnchor: "middle",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-half has-background-white ">
          <h1 className="subtitle has-text-centered has-text-weight-semibold is-family-sans-serif">
            Graphic Gas Used m³/day
          </h1>
          <ChartStriko1Consumption />
        </div>
      </div>
    </LayoutGas>
  );
};

export default GasConsumption;
