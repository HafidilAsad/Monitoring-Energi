import { Sequelize } from "sequelize";
import db from "../config/DatabaseGas.js";

const { DataTypes } = Sequelize;

const AkhirhariStriko3 = db.define(
  "db_akhir_hari_striko3",
  {
    nama_mesin: DataTypes.STRING,
    gas_used: DataTypes.STRING,
    gas_consumption: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default AkhirhariStriko3;

(async () => {
  await db.sync();
})();
