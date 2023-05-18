import React from "react";
import LayoutTV from "../components/LayoutTV";
import logo from "../logo.png";
import CurrentDate from "../components/CurrentDate";
import Clock from "../components/Clock";
import { IoNotificationsOutline } from "react-icons/io5";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const TVGas = () => {
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
                <p className="button is-info" href="">
                  <CurrentDate />
                </p>
              </div>
              <p className="control">
                <p className="button is-info" href="">
                  <Clock />
                </p>
              </p>

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
      <div className="columns pt-3 ">
        <div className="column has-text-centered ">
          <div className="card  has-text-centered  ">
            <header
              className=" has-text-centered pt-2 pb-2 "
              style={{ borderBottom: "2px solid #2986cc" }}
            >
              <span className="has-text-centered has-text-grey is-family-monospace has-text-centered  has-text-weight-bold is-size-3 ">
                STRIKO 1
              </span>
            </header>
            <div className="card-content  pl-6">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label"></label>
                </div>
                <div class="field-body">
                  <div class="field">
                    {report
                      .filter(({ id }) => id === 1)
                      .map((item) => (
                        <div
                          className="has-text-grey is-family-monospace has-text-weight-bold"
                          style={{ fontSize: "70px" }}
                        >
                          {item.gas_consumption - gas_kemarin} M³
                        </div>
                      ))}
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left has-icons-right pt-2">
                      <p>
                        <div className="vertical-progress-bar pt-5">
                          {report
                            .filter(({ id }) => id === 1)
                            .map((item) => (
                              <progress
                                className="progress is-info level-right "
                                value={item.gas_used} // Adjust the progress value as per your requirement
                                max="100" // Adjust the maximum value as per your requirement
                                style={{
                                  transform: "rotate(-90deg)", // Rotate the progress bar vertically
                                  height: "38px", // Adjust the height of the progress bar
                                  width: "130px",
                                }}
                              >
                                60% {/* Display the progress percentage */}
                              </progress>
                            ))}
                        </div>
                      </p>
                      <span class="icon is-small is-left" />
                      <i class="fas fa-envelope"></i>
                      <span />
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <footer className="card-footer-item">
              {report
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <p className="card-footer-item has-text-weight-bold has-text-grey ">
                    FLOW = {item.gas_used} M³/h
                  </p>
                ))}
              <p className="card-footer-item has-text-weight-bold has-text-grey ">
                TONAGE = TON
              </p>
              <p className="card-footer-item has-text-weight-bold has-text-grey ">
                CONS = 0 M³/Ton
              </p>
            </footer>
          </div>
        </div>
        <div className="column has-text-centered ">
          <div className="card  has-text-centered">
            <header
              className=" has-text-centered pt-2 pb-2 "
              style={{ borderBottom: "2px solid #2986cc" }}
            >
              <span className="has-text-centered has-text-grey is-family-monospace has-text-centered  has-text-weight-bold is-size-3 ">
                STRIKO 2
              </span>
            </header>
            <div className="card-content  pl-6">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label"></label>
                </div>
                <div class="field-body">
                  <div class="field">
                    {report
                      .filter(({ id }) => id === 2)
                      .map((item) => (
                        <div
                          className="has-text-grey is-family-monospace has-text-weight-bold"
                          style={{ fontSize: "70px" }}
                        >
                          {item.gas_consumption} M³
                        </div>
                      ))}
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left has-icons-right pt-2">
                      <p>
                        <div className="vertical-progress-bar pt-5">
                          {report
                            .filter(({ id }) => id === 2)
                            .map((item) => (
                              <progress
                                className="progress is-info level-right "
                                value={item.gas_used} // Adjust the progress value as per your requirement
                                max="100" // Adjust the maximum value as per your requirement
                                style={{
                                  transform: "rotate(-90deg)", // Rotate the progress bar vertically
                                  height: "38px", // Adjust the height of the progress bar
                                  width: "130px",
                                }}
                              >
                                60% {/* Display the progress percentage */}
                              </progress>
                            ))}
                        </div>
                      </p>
                      <span class="icon is-small is-left" />
                      <i class="fas fa-envelope"></i>
                      <span />
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="card-footer-item">
              {report
                .filter(({ id }) => id === 2)
                .map((item) => (
                  <p className="card-footer-item has-text-weight-bold has-text-grey ">
                    FLOW = {item.gas_used} M³/h
                  </p>
                ))}
              <p className="card-footer-item has-text-weight-bold has-text-grey ">
                TONAGE = TON
              </p>
              <p className="card-footer-item has-text-weight-bold has-text-grey ">
                CONS = 0 M³/Ton
              </p>
            </footer>
          </div>
        </div>
      </div>
      <div className="columns  has-text-centered">
        <div className="column has-text-centered ">
          <div className="card  has-text-centered">
            <header
              className=" has-text-centered pt-2 pb-2 "
              style={{ borderBottom: "2px solid #2986cc" }}
            >
              <span className="has-text-centered has-text-grey is-family-monospace has-text-centered  has-text-weight-bold is-size-3">
                STRIKO 3
              </span>
            </header>
            <div className="card-content  pl-6">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label"></label>
                </div>
                <div class="field-body">
                  <div class="field">
                    {report
                      .filter(({ id }) => id === 3)
                      .map((item) => (
                        <div
                          className="has-text-grey is-family-monospace has-text-weight-bold"
                          style={{ fontSize: "70px" }}
                        >
                          {item.gas_consumption} M³
                        </div>
                      ))}
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left has-icons-right pt-2">
                      <p>
                        <div className="vertical-progress-bar pt-5">
                          {report
                            .filter(({ id }) => id === 3)
                            .map((item) => (
                              <progress
                                className="progress is-info level-right "
                                value={item.gas_used} // Adjust the progress value as per your requirement
                                max="100" // Adjust the maximum value as per your requirement
                                style={{
                                  transform: "rotate(-90deg)", // Rotate the progress bar vertically
                                  height: "38px", // Adjust the height of the progress bar
                                  width: "130px",
                                }}
                              >
                                60% {/* Display the progress percentage */}
                              </progress>
                            ))}
                        </div>
                      </p>
                      <span class="icon is-small is-left" />
                      <i class="fas fa-envelope"></i>
                      <span />
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="card-footer-item">
              {report
                .filter(({ id }) => id === 3)
                .map((item) => (
                  <p className="card-footer-item has-text-weight-bold has-text-grey ">
                    FLOW = {item.gas_used} M³/h
                  </p>
                ))}
              <p className="card-footer-item has-text-weight-bold has-text-grey ">
                TONAGE = TON
              </p>
              <p className="card-footer-item has-text-weight-bold has-text-grey ">
                CONS = 0 M³/Ton
              </p>
            </footer>
          </div>
        </div>
        <div className="column has-text-centered ">
          <div className="card  has-text-centered">
            <header
              className=" has-text-centered pt-2 pb-2 "
              style={{ borderBottom: "2px solid #2986cc" }}
            >
              <span className="has-text-centered has-text-grey is-family-monospace has-text-centered  has-text-weight-bold is-size-3 ">
                SWIFT ASIA
              </span>
            </header>
            <div className="card-content  pl-6">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label"></label>
                </div>
                <div class="field-body">
                  <div class="field">
                    {report
                      .filter(({ id }) => id === 4)
                      .map((item) => (
                        <div
                          className="has-text-grey is-family-monospace has-text-weight-bold"
                          style={{ fontSize: "70px" }}
                        >
                          {item.gas_consumption} M³
                        </div>
                      ))}
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left has-icons-right pt-2">
                      <p>
                        <div className="vertical-progress-bar pt-5">
                          {report
                            .filter(({ id }) => id === 4)
                            .map((item) => (
                              <progress
                                className="progress is-info level-right "
                                value={item.gas_used} // Adjust the progress value as per your requirement
                                max="100" // Adjust the maximum value as per your requirement
                                style={{
                                  transform: "rotate(-90deg)", // Rotate the progress bar vertically
                                  height: "38px", // Adjust the height of the progress bar
                                  width: "130px",
                                }}
                              >
                                60% {/* Display the progress percentage */}
                              </progress>
                            ))}
                        </div>
                      </p>
                      <span class="icon is-small is-left" />
                      <i class="fas fa-envelope"></i>
                      <span />
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="card-footer-item">
              {report
                .filter(({ id }) => id === 4)
                .map((item) => (
                  <p className="card-footer-item has-text-weight-bold has-text-grey ">
                    FLOW = {item.gas_used} M³/h
                  </p>
                ))}
              <p className="card-footer-item has-text-weight-bold has-text-grey ">
                TONAGE = TON
              </p>
              <p className="card-footer-item has-text-weight-bold has-text-grey ">
                CONS = 0 M³/Ton
              </p>
            </footer>
          </div>
        </div>
      </div>
    </LayoutTV>
  );
};

export default TVGas;
