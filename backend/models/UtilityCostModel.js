import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const UtilityCost = db.define(
  "utilitycost",
  {
    listrik_usage: DataTypes.STRING,
    gas_usage: DataTypes.STRING,
    air_usage: DataTypes.STRING,
    total_cost: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default UtilityCost;

(async () => {
  await db.sync();
})();
