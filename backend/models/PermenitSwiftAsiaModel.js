import { Sequelize } from "sequelize";
import db from "../config/DatabaseGas.js";

const { DataTypes } = Sequelize;

const PermenitSwiftAsia = db.define(
  "db_permenit_swiftasia",
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
export default PermenitSwiftAsia;

(async () => {
  await db.sync();
})();
