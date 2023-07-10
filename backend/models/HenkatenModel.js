import { Sequelize } from "sequelize";
import db from "../config/DatabaseHenkaten.js";

const { DataTypes } = Sequelize;

const Henkaten = db.define(
  "db_henkatentoday",
  {
    kategori: DataTypes.STRING,
    plan: DataTypes.STRING,
    unplan: DataTypes.STRING,
    place: DataTypes.STRING,
    description: DataTypes.STRING,
    countermeasure: DataTypes.STRING,
    pic: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default Henkaten;

(async () => {
  await db.sync();
})();
