import React from "react";
import { IoLogoStencil, IoEaselOutline, IoPulseSharp } from "react-icons/io5";

const Mesin57 = () => {
  return (
    <div>
      <section className="hero is-small is-primary">
        <div className="hero-body">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <p className="subtitle is-5">
                  <strong>Machine 57</strong>
                </p>
              </div>
              <div className="level-item">
                <div className="field has-addons">
                  <p className="control"></p>
                  <p className="control"></p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="level-right">
              <p className="level-item">
                <strong>AVERAGE</strong>
              </p>
              <p className="level-item">
                <strong>ENERGY DEL</strong>
              </p>
              <p className="level-item">
                <strong>DETAILS</strong>
              </p>
              <p className="level-item">
                <a>.</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="">
        <div className="columns">
          {" "}
          <div className="column is-9">
            <div className="content is-medium">
              <div className="box">
                <h4 id="const" class="title is-3">
                  const
                </h4>
                <div className="message is-primary">
                  <div className="message-body">ppp</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3">
            <div className="is-medium">
              <ul
                className="menu-list"
                style={{
                  // backgroundColor: "#485fc7",
                  display: "block",
                  padding: "0.5em 0.75em",
                }}
              >
                <li className="is-right ">
                  <a className="is-active mb-2 is-family-monospace is-size-5">
                    <i>
                      <IoLogoStencil />
                    </i>{" "}
                    I-1
                  </a>
                </li>
                <li className="is-right ">
                  <a className="is-active mb-2  is-family-monospace is-size-5">
                    <i>
                      <IoLogoStencil />
                    </i>{" "}
                    I-2
                  </a>
                </li>
                <li className="is-right ">
                  <a className="is-active mb-2 is-family-monospace is-size-5">
                    <i>
                      <IoLogoStencil />
                    </i>{" "}
                    I-3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="columns ">
          <div className="column is-9">
            <div className="content is-medium">
              <div className="box">
                <div className="message is-primary">
                  <div className="message-body">ppp</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3">
            <ul
              className="menu-list"
              style={{
                // backgroundColor: "#485fc7",
                display: "block",
                padding: "0.5em 0.75em",
              }}
            >
              <li className="is-right ">
                <a className="is-active mb-2 is-family-monospace is-size-5">
                  <i>
                    <IoEaselOutline />
                  </i>{" "}
                  V-1
                </a>
              </li>
              <li className="is-right ">
                <a className="is-active mb-2  is-family-monospace is-size-5">
                  <i>
                    <IoEaselOutline />
                  </i>{" "}
                  V-2
                </a>
              </li>
              <li className="is-right ">
                <a className="is-active mb-2 is-family-monospace is-size-5">
                  <i>
                    <IoEaselOutline />
                  </i>{" "}
                  V-3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="columns">
          <div className="column is-9">
            <div className="content is-medium">
              <div className="box">
                <div className="message is-primary">
                  <div className="message-body">ppp</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3">
            <ul
              className="menu-list"
              style={{
                // backgroundColor: "#485fc7",
                display: "block",
                padding: "0.5em 0.75em",
              }}
            >
              <li className="is-right ">
                <a className="is-active mb-2 is-family-monospace is-size-5">
                  <i>
                    <IoPulseSharp />
                  </i>{" "}
                  I-1
                </a>
              </li>
              <li className="is-right ">
                <a className="is-active mb-2  is-family-monospace is-size-5">
                  <i>
                    <IoPulseSharp />
                  </i>{" "}
                  I-2
                </a>
              </li>
              <li className="is-right ">
                <a className="is-active mb-2 is-family-monospace is-size-5">
                  <i>
                    <IoPulseSharp />
                  </i>{" "}
                  I-3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mesin57;
