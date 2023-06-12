import { Sequelize } from "sequelize";
import db from "../config/DatabaseGas.js";

const { DataTypes } = Sequelize;

const PermenitStriko3 = db.define(
  "db_permenit_striko3",
  {
    nama_mesin: DataTypes.STRING,
    gas_used: DataTypes.STRING,
    gas_consumption: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: true, // Aktifkan properti timestamps dengan nilai default
  }
);
export default PermenitStriko3;

(async () => {
  await db.sync();
})();
