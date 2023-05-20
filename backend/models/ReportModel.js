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
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);

// const Report = db.define('monitoring_gas',{
//     nama_mesin: DataTypes.STRING,
//     gas_used: DataTypes.STRING,
//     gas_consumption: DataTypes.STRING,
//     total_charging: DataTypes.STRING,
//     tanggal: DataTypes.STRING
// },{
//     freezeTableName:true
// });

export default Report;

(async () => {
  await db.sync();
})();
