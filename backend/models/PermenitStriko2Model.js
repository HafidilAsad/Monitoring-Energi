import { Sequelize } from "sequelize";
import db from "../config/DatabaseGas.js";

const { DataTypes } = Sequelize;

const PermenitStriko2 = db.define(
  "db_permenit_striko2",
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
export default PermenitStriko2;

(async () => {
  await db.sync();
})();
