import { Sequelize } from "sequelize";
import db from "../config/DatabaseGas.js";

const { DataTypes } = Sequelize;

const Akhirhari = db.define(
  "akhir_hari",
  {
    nama_mesin: DataTypes.STRING,
    gas_used: DataTypes.STRING,
    gas_consumption: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default Akhirhari;

(async () => {
  await db.sync();
})();
