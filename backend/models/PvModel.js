import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Pv = db.define(
  "tablepv",
  {
    nilaipv: DataTypes.STRING,
    persen_utilitycost: DataTypes.STRING,
  },

  {
    freezeTableName: true,
  }
);
export default Pv;

(async () => {
  await db.sync();
})();
