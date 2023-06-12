import React from "react";
import LayoutGas from "./LayoutGas";
import Clock from "../components/Clock";
import CurrentDate from "../components/CurrentDate";
import logo from "../logo.png";
import ChartCostGas from "../components/ChartCostGas";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { IoNotificationsOutline } from "react-icons/io5";

const TotalGas = () => {
  const [consumpperbulanini, setConsumptionperbulanini] = useState(0);
  const [consumpperbulaniniswiftasia, setConsumptionperbulaniniswiftasia] =
    useState(0);
  const [consumpperbulaniniton, setConsumptionperbulaniniton] = useState(0);
  const [
    consumpperbulaninitonswiftasia,
    setConsumptionperbulaninitonswiftasia,
  ] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [badgeNumber, setBadgeNumber] = useState(1);
  const [pesanNotifikasi, setPesanNotifikasi] = useState([]);

  //Ambil data perbulan ini swiftasia
  useEffect(() => {
    axios
      .get("http://localhost:5000/reportsperbulaniniswiftasia")
      .then((response) => {
        setConsumptionperbulaniniswiftasia(response.data.gasConsumptionSum);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  //Ambil data perbulan ini Swiftasia
  useEffect(() => {
    axios
      .get("http://localhost:5000/reportsperbulaniniswiftasia")
      .then((response) => {
        setConsumptionperbulaninitonswiftasia(
          response.data.gasConsumptionSumTon
        );
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

  //untuk Fungsi Notifikasi

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

  var mmbtuStriko1 = consumpperbulanini / 27.3;
  var mmbtuSwiftAsia = consumpperbulaniniswiftasia / 27.3;
  var totalMmbtu = (mmbtuStriko1 + mmbtuSwiftAsia).toFixed(1);
  var totalUsed = consumpperbulanini + consumpperbulaniniswiftasia;
  var percentageStriko1 = ((consumpperbulanini / totalUsed) * 100).toFixed();
  var percentageSwiftasia = (
    (consumpperbulaniniswiftasia / totalUsed) *
    100
  ).toFixed();

  return (
    <LayoutGas>
      <nav className="level is-info navbar">
        <div className="navbar-brand">
          <p
            href="/"
            className="navbar-item has-background-white"
            style={{ borderRadius: "0.9rem" }}
          >
            <img src={logo} width="112" height="28" alt="" />
          </p>

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
            TOTAL GAS
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
      </nav>{" "}
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
                {percentageStriko1}%
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <p href="#" className="card-footer-item">
                {(consumpperbulanini / 27.3).toFixed(1)} mmbtu
              </p>
              <p href="#" className="card-footer-item">
                {consumpperbulaniniton.toFixed()} m³/Ton
              </p>
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
              <p href="#" className="card-footer-item">
                0 mmbtu
              </p>
              <p href="#" className="card-footer-item">
                0 m³/Ton
              </p>
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
              <p href="#" className="card-footer-item">
                0 mmbtu
              </p>
              <p href="#" className="card-footer-item">
                0 m³/Ton
              </p>
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
                {percentageSwiftasia}%
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <p href="#" className="card-footer-item">
                {(consumpperbulaniniswiftasia / 27.3).toFixed(1)} mmbtu
              </p>
              <p href="#" className="card-footer-item">
                {consumpperbulaninitonswiftasia.toFixed()} m³/Ton
              </p>
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
              <p href="#" className="card-footer-item">
                0 mmbtu
              </p>
              <p href="#" className="card-footer-item">
                0 m³/Ton
              </p>
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
                    TOTAL (mmbtu) : {totalMmbtu}
                  </div>
                  <div
                    className="box  is-family-monospace  has-text-weight-bold"
                    style={{ borderLeft: "5px solid #2986cc" }}
                  >
                    TOTAL COST:{" "}
                    {(totalMmbtu * 10.03)

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
                    CHARGE : 0
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
