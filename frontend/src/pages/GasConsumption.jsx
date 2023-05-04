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

const GasConsumption = () => {
  const [gas_kemarin, setGas_kemarin] = useState([]);
  const [sensor, setSensor] = useState([]);
  const [Yesterday, setYesterday] = useState([]);
  const [UsedYesterday, setUsedYesterday] = useState([]);

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
  }, []);

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
  }, []);

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

  const percentage = 25;
  return (
    <LayoutGas>
      <nav
        className="navbar is-info "
        role="navigation"
        aria-label="main navigation"
      >
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

        <div className="navbar-brand pl-5 has-text-centered">
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item has-text-centered">
            <span
              className="has-text-centered is-flex justify-content-center ml-5 has-text-weight-bold is-family-sans-serif"
              style={{ fontSize: "20px" }}
            >
              MONITORING GAS LNG
            </span>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <div className="control">
                <a
                  className="button is-info"
                  href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip"
                >
                  <CurrentDate />
                </a>
              </div>
              <p className="control">
                <a
                  className="button is-info"
                  href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip"
                >
                  <Clock />
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar has-background-light">
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
                  <a href="/" className="button is-primary">
                    <span>STRIKO 1</span>
                  </a>
                </p>
                <p className="control">
                  <button className="button is-primary">
                    <span>STRIKO 2</span>
                  </button>
                </p>
                <p className="control">
                  <button className="button is-primary">
                    <span>STRIKO 3</span>
                  </button>
                </p>
                <p className="control">
                  <button className="button is-primary">
                    <span>SWIFT ASIA</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="columns ">
        <div className="column is-half has-background-white ">
          <h1 className="subtitle has-text-centered has-text-weight-semibold is-family-sans-serif">
            Graphic Gas Consumption M³/Ton
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
                  Yesterday M³/Ton
                </div>
                <div className="card-content">
                  <div className="level">
                    <span className="has-text-centered has-text-weight-bold pt-4">
                      <br />
                      {Yesterday} M³/Ton
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
                      {UsedYesterday} mmbtu
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
                  This Month M³/Ton
                </div>
                <div className="card-content">
                  <progress className="progress is-danger" value="90" max="100">
                    90%
                  </progress>
                  <h1>1000</h1>
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
                    value="60"
                    max="100"
                  >
                    60%
                  </progress>
                  <div style={{ width: 50, height: 27 }}>
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
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns ">
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
                          ).toFixed(1)}{" "}
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
                <div className="card-header pl-4">GAS USED TODAY (M³)</div>
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
                        {item.gas_consumption - gas_kemarin} M³
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
                <div className="card-header pl-4">FLOW IN SENSOR (M³/h)</div>
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
                        {item.gas_used} M³/h
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
                <div className="card-header pl-4">
                  CONSUMPTION IN SENSOR (M³)
                </div>
                <div className="card-content">
                  <div className="level">
                    {sensor
                      .filter(({ id }) => id === 1)
                      .map((item) => (
                        <span className="has-text-centered has-text-weight-bold pt-4">
                          <br />
                          {item.gas_consumption} M³
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
            Graphic Gas Consumption M³/day
          </h1>
          <ChartStriko1Consumption />
        </div>
      </div>
    </LayoutGas>
  );
};

export default GasConsumption;
