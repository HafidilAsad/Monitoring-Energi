import { Sequelize } from "sequelize";
import db from "../config/DatabaseHenkaten.js";

const { DataTypes } = Sequelize;

const Attendance = db.define(
  "attendance",
  {
    nama: DataTypes.STRING,
    nrp: DataTypes.DOUBLE,
    tim: DataTypes.STRING,
    kehadiran: DataTypes.STRING,
    kesehatan: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default Attendance;

(async () => {
  await db.sync();
})();
