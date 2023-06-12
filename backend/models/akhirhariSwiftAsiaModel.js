import { Sequelize } from "sequelize";
import db from "../config/DatabaseGas.js";

const { DataTypes } = Sequelize;

const AkhirhariSwiftAsia = db.define(
  "db_akhir_hari_swiftasia",
  {
    nama_mesin: DataTypes.STRING,
    gas_used: DataTypes.STRING,
    gas_consumption: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default AkhirhariSwiftAsia;

(async () => {
  await db.sync();
})();
