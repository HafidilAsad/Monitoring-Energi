import { Sequelize } from "sequelize";
import db from "../config/DatabaseGas.js";

const { DataTypes } = Sequelize;

// Define schema
const Report = db.define(
  "db_perhari_monitoring_gas",
  {
    // Define attributes
    nama_mesin: {
      type: DataTypes.STRING,
    },
    gas_used: {
      type: DataTypes.DOUBLE,
    },
    gas_consumption: {
      type: DataTypes.DOUBLE,
    },
    total_charging: {
      type: DataTypes.DOUBLE,
    },
    gas_mmbtu: {
      type: DataTypes.DOUBLE,
    },
    gas_cost: {
      type: DataTypes.DOUBLE,
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
