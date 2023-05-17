import React from "react";
import LayoutGas from "./LayoutGas";
import Clock from "../components/Clock";
import CurrentDate from "../components/CurrentDate";
import logo from "../logo.png";
import ChartCostGas from "../components/ChartCostGas";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const TotalGas = () => {
  const [consumpperbulanini, setConsumptionperbulanini] = useState(0);
  const [consumpperbulaniniton, setConsumptionperbulaniniton] = useState(0);

  //Ambil data perbulan ini Striko 1
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

  //Ambil data perbulan ini Striko 1
  useEffect(() => {
    axios
      .get("http://localhost:5000/reportsperbulanini")
      .then((response) => {
        setConsumptionperbulaniniton(response.data.gasConsumptionSumTon);
      })
      .catch((error) => {
        console.error(error);
      });
  });
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
                <a className="button is-info" href="">
                  <CurrentDate />
                </a>
              </div>
              <p className="control">
                <a className="button is-info" href="">
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
            TOTAL
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
      <div className="columns m-1">
        <div className="column">
          <div className="card">
            <header
              className="card-header "
              style={{ borderBottom: "2px solid #2986cc" }}
            >
              <p className="card-header-title has-text-grey is-family-monospace">
                Striko 1
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div
                className="content is-size-4   has-text-grey is-family-primary "
                style={{ fontWeight: 1000 }}
              >
                100%
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                {(consumpperbulanini / 27.3).toFixed(1)} mmbtu
              </a>
              <a href="#" className="card-footer-item">
                {consumpperbulaniniton.toFixed()} M³/Ton
              </a>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header
              className="card-header"
              style={{ borderBottom: "2px solid #2986cc" }}
            >
              <p className="card-header-title has-text-grey is-family-monospace">
                Striko 2
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div
                className="content is-size-4   has-text-grey is-family-primary "
                style={{ fontWeight: 1000 }}
              >
                0%
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                mmbtu
              </a>
              <a href="#" className="card-footer-item">
                M³/Ton
              </a>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header
              className="card-header"
              style={{ borderBottom: "2px solid #2986cc" }}
            >
              <p className="card-header-title has-text-grey is-family-monospace">
                Striko 3
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div
                className="content is-size-4   has-text-grey is-family-primary "
                style={{ fontWeight: 1000 }}
              >
                0%
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                0 mmbtu
              </a>
              <a href="#" className="card-footer-item">
                0 M³/Ton
              </a>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header
              className="card-header"
              style={{ borderBottom: "2px solid #2986cc" }}
            >
              <p className="card-header-title has-text-grey is-family-monospace">
                Swift Asia
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div
                className="content is-size-4   has-text-grey is-family-primary "
                style={{ fontWeight: 1000 }}
              >
                0%
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                0 mmbtu
              </a>
              <a href="#" className="card-footer-item">
                0 M³/Ton
              </a>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header
              className="card-header "
              style={{ borderBottom: "2px solid #2986cc" }}
            >
              <p className="card-header-title has-text-grey is-family-monospace">
                Gravity
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div
                className="content is-size-4   has-text-grey is-family-primary "
                style={{ fontWeight: 1000 }}
              >
                0%
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                0 mmbtu
              </a>
              <a href="#" className="card-footer-item">
                0 M³/Ton
              </a>
            </footer>
          </div>
        </div>
      </div>
      <div className="columns m-1">
        <div className="column is-full">
          <div className="card">
            <div className="card-header">
              <div className="card-header-title has-background-info">
                <p className="has-text-white">
                  <div className="select is-small">
                    <select>
                      <option>Graphic Perhari</option>
                      <option>Graphic Perbulan</option>
                    </select>
                  </div>
                </p>
              </div>
            </div>
            <div className="card-content">
              <div className="columns">
                <div className="column is-half has-background-white is-9">
                  <div className="field">
                    <ChartCostGas />
                  </div>
                </div>
                <div className="column">
                  <div
                    className="box  is-family-monospace  has-text-weight-bold"
                    style={{ borderLeft: "5px solid #2986cc" }}
                  >
                    TOTAL (mmbtu) : {(consumpperbulanini / 27.3).toFixed(1)}
                  </div>
                  <div
                    className="box  is-family-monospace  has-text-weight-bold"
                    style={{ borderLeft: "5px solid #2986cc" }}
                  >
                    TOTAL :{" "}
                    {((consumpperbulanini / 27.2203879834687) * 9.6)

                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                      .replace(/^(\D+)/, "$1 ")}
                  </div>

                  <div
                    className="box  is-family-monospace  has-text-weight-bold"
                    style={{ borderLeft: "5px solid #2986cc" }}
                  >
                    MAX (mmbtu) : 18000
                  </div>
                  <div
                    className="box  is-family-monospace  has-text-weight-bold"
                    style={{ borderLeft: "5px solid #2986cc" }}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutGas>
  );
};

export default TotalGas;
