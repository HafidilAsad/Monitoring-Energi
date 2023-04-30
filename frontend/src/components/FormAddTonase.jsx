import React from "react";

const FormAddTonase = () => {
  return (
    <div className="pt-1">
      <h1 className="title is-size-5">Form Input Tonase </h1>
      <h2 className="subtitle"></h2>
      <br />
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <div className="field">
                <label className="label"> Tonase</label>
                <div className="control">
                  <input type="text" className="input" placeholder="Tonase" />
                </div>
              </div>

              <div className="field">
                <label className="label">Pilih Bagian</label>
                <div className="select">
                  <select className="is-hovered">
                    <option>Pilih Tonase Mesin</option>
                    <option>Melting</option>
                    <option>Casting HPDC</option>
                    <option>Casting GDC</option>
                    <option>Machining</option>
                    <option>Painting</option>
                    <option>Lain-Lain</option>
                  </select>
                </div>
              </div>

              <div className="field ">
                <div className="control">
                  <button className="button is-success is-normal">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddTonase;
