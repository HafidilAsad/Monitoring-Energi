import { Sequelize } from "sequelize";
import db from "../config/DatabaseGas.js";

const { DataTypes } = Sequelize;

const Striko1 = db.define(
  "monitoring_gas30",
  {
    nama_mesin: DataTypes.STRING,
    gas_used: DataTypes.STRING,
    gas_consumption: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default Striko1;

(async () => {
  await db.sync();
})();
