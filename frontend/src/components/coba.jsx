import React from "react";

const coba = () => {
  return (
    <div>
      <div className="level-right">
        <div className="level">
          <div className="box">
            <div className="level-item">
              <div className=" is-size-5 pr-5 has-text-weight-semibold has-text-grey">
                <CurrentDate />
              </div>
              <div className="level-item">
                <div className=" is-size-5 pr-5 has-text-weight-semibold has-text-grey">
                  <Clock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="level-item pb-1">
        <div className="">
          <div className="has-text-centered has-text-centered is-size-4 has-text-weight-bold is-family-primary">
            UTILITY COST 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default coba;
