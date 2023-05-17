import React from "react";
import LayoutGas from "./LayoutGas";
import logo from "../logo.png";
import CurrentDate from "../components/CurrentDate";
import Clock from "../components/Clock";
import "../components/css/welcome.css";

const GasConsumptionGravity = () => {
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
            GRAVITY
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
      <p className="navbar-item has-text-weight-bold has-text-underlined is-size-1 blink">
        ON GOING...........
      </p>
    </LayoutGas>
  );
};

export default GasConsumptionGravity;
