import { Sequelize } from "sequelize";
import db from "../config/DatabaseGas.js";

const { DataTypes } = Sequelize;

// Define schema
const Report = db.define(
  "notifikasi",
  {
    // Define attributes

    pesan_notifikasi: {
      type: DataTypes.STRING,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);

export default Report;

(async () => {
  await db.sync();
})();
