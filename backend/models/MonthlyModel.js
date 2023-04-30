import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const monthly = db.define(
  "tablemonthly",
  {
    nilaimonthly: DataTypes.STRING,
    persen_utilitycost: DataTypes.STRING,
  },

  {
    freezeTableName: true,
  }
);
export default monthly;

(async () => {
  await db.sync();
})();
