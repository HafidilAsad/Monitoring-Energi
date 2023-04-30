import React from "react";
import LayoutGas from "./LayoutGas";
import Clock from "../components/Clock";
import CurrentDate from "../components/CurrentDate";
import logo from "../logo.png";
import ChartStriko1 from "../components/ChartStriko1";
import ChartStriko2 from "./ChartStriko2";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Gas = () => {
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
  return (
    <LayoutGas>
      <nav
        className="navbar is-info "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
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
                className="card-header-title  has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
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
                  style={{ fontSize: "55px" }}
                >
                  {item.gas_used} <span className="is-size-3">M³/h</span>
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
                      USED = {item.gas_used} M³/h
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
                      CONSUMPTION = {item.gas_consumption} M³
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
                      PERCENTAGE = {item.gas_used / 4}%
                    </span>
                  ))}
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
                className="card-header-title has-text-centered has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">STRIKO 2</span>
              </p>
            </div>

            <h1
              className="has-text-black  has-text-centered has-text-grey "
              style={{ fontSize: "55px" }}
            >
              30 <span className="is-size-3">M³/h</span>
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
                      USED = {item.gas_used} M³/h
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
                      CONSUMPTION = {item.gas_consumption} M³
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
                      PERCENTAGE = {item.gas_used / 4} %
                    </span>
                  ))}
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
                className="card-header-title has-text-centered has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">STRIKO 3</span>
              </p>
            </div>
            <h1
              className="has-text-black  has-text-centered  has-text-grey "
              style={{ fontSize: "55px" }}
            >
              35 <span className="is-size-3">M³/h</span>
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
                  .filter(({ id }) => id === 3)
                  .map((item) => (
                    <span className="is-block has-text-centered">
                      USED = {item.gas_used} M³/h
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
                      CONSUMPTION = {item.gas_consumption} M³
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
                      PERCENTAGE = {item.gas_used / 4} %
                    </span>
                  ))}
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
                className="card-header-title has-text-centered has-text-weight-bold is-family-monospace is-size-6 has-text-grey"
                style={{ textAlign: "center" }}
              >
                <span className="is-block has-text-centered">SWIFT ASIA</span>
              </p>
            </div>
            <h1
              className="has-text-black  has-text-centered  has-text-grey "
              style={{ fontSize: "55px" }}
            >
              45 <span className="is-size-3">M³/h</span>
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
                  .filter(({ id }) => id === 4)
                  .map((item) => (
                    <span className="is-block has-text-centered">
                      USED = {item.gas_used} M³/h
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
                      CONSUMPTION = {item.gas_consumption} M³
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
                      PERCENTAGE = {item.gas_used / 4} %
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutGas>
  );
};

export default Gas;
