import { Sequelize } from "sequelize";
import db from "../config/DatabaseGas.js";

const { DataTypes } = Sequelize;

const AkhirhariStriko2 = db.define(
  "db_akhir_hari_striko2",
  {
    nama_mesin: DataTypes.STRING,
    gas_used: DataTypes.STRING,
    gas_consumption: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default AkhirhariStriko2;

(async () => {
  await db.sync();
})();
