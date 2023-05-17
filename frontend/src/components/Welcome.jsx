import React from "react";
import ChartDashboard from "./ChartDashboard";
import { IoFlashSharp, IoWaterSharp, IoSunnyOutline } from "react-icons/io5";

const Welcome = () => {
  return (
    <div>
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <article className="message ">
              <div className="message-header">
                <p>Electricity</p>
              </div>
              <div className="message-body">
                <div className="columns">
                  <div className="column  ">
                    <IoFlashSharp style={{ width: "80px", height: "80px" }} />
                  </div>
                  <div className="column pt-7">
                    <p className="is-family-code is-size-5 has-text-weight-semibold pt-3 ">
                      TOTAL KWH
                    </p>
                    <p className="is-family-code is-size-5 has-text-weight-semibold ">
                      PERCENTAGE
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-child box">
            <article className="message ">
              <div className="message-header">
                <p>Gas</p>
              </div>
              <div className="message-body">
                <div className="columns">
                  <div className="column">
                    <div className="is-size-1">
                      <IoSunnyOutline
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                  </div>
                  <div className="column pt-7 ">
                    <p className="is-family-code is-size-5 has-text-weight-semibold pt-3 ">
                      TOTAL M
                    </p>
                    <p className="is-family-code is-size-5 has-text-weight-semibold ">
                      PERCENTAGE
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-child box">
            <article className="message ">
              <div className="message-header">
                <p>Water</p>
              </div>
              <div className="message-body">
                <div className="columns">
                  <div className="column is-size-1">
                    <IoWaterSharp style={{ width: "80px", height: "80px" }} />
                  </div>
                  <div className="column">
                    <p className="is-family-code is-size-5 has-text-weight-semibold pt-3 ">
                      TOTAL M
                    </p>
                    <p className="is-family-code is-size-5 has-text-weight-semibold ">
                      PERCENTAGE
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent  has-text-centered ">
          <div className="tile is-child box">
            <div className="card">
              <div className="card-content">
                <p className="title has-text-weight-semibold is-family-sans-serif">
                  PERCENTAGE CHART
                </p>
                <div className=" ml-1 pl-1">
                  <div>
                    <ChartDashboard
                      style={{ width: "780px", height: "780px" }}
                    />
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    View on <a href="#">Twitter</a>
                  </span>
                </p>
                <p className="card-footer-item">
                  <span>
                    Share on <a href="#">Facebook</a>
                  </span>
                </p>
                <p className="card-footer-item">
                  <span>
                    Share on <a href="#">Facebook</a>
                  </span>
                </p>
                <p className="card-footer-item">
                  <span>
                    Share on <a href="#">Facebook</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
