import React from "react";
import LayoutGas from "./LayoutGas";
import Clock from "../components/Clock";
import CurrentDate from "../components/CurrentDate";
import logo from "../logo.png";
import ChartCostGas from "../components/ChartCostGas";
const TotalGas = () => {
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
                <p className="control">
                  <button className="button is-primary">
                    <span>GRAVITY</span>
                  </button>
                </p>
                <p className="control">
                  <button className="button is-primary">
                    <span>TOTAL</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="columns">
        <div class="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Striko 1</p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div className="content is-size-4 ">
                nilai persen striko1
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                Save
              </a>
              <a href="#" className="card-footer-item">
                Edit
              </a>
              <a href="#" className="card-footer-item">
                Delete
              </a>
            </footer>
          </div>
        </div>
        <div class="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Striko2</p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div className="content is-size-4 ">
                nilai persen striko2
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                Save
              </a>
              <a href="#" className="card-footer-item">
                Edit
              </a>
              <a href="#" className="card-footer-item">
                Delete
              </a>
            </footer>
          </div>
        </div>
        <div class="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Striko3</p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div className="content is-size-4 ">
                nilai persen striko3
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                Save
              </a>
              <a href="#" className="card-footer-item">
                Edit
              </a>
              <a href="#" className="card-footer-item">
                Delete
              </a>
            </footer>
          </div>
        </div>
        <div class="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Swift Asia</p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div className="content is-size-4 ">
                persen swift asia
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                Save
              </a>
              <a href="#" className="card-footer-item">
                Edit
              </a>
              <a href="#" className="card-footer-item">
                Delete
              </a>
            </footer>
          </div>
        </div>
        <div class="column">
          <div className="card">
            <header className="card-header ">
              <p className="card-header-title ">Gravity</p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div className="content is-size-4 ">
                nilai persen gravity
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                Save
              </a>
              <a href="#" className="card-footer-item">
                Edit
              </a>
              <a href="#" className="card-footer-item">
                Delete
              </a>
            </footer>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half has-background-white is-9">
          <div className="field">
            <ChartCostGas />
          </div>
        </div>
        <div class="column">
          <div className="box">PPPP</div>
          <div className="box">pppp</div>
          <div className="box">pppp</div>
          <div className="box">pppp</div>
          <div className="box">pppp</div>
        </div>
      </div>
    </LayoutGas>
  );
};

export default TotalGas;
