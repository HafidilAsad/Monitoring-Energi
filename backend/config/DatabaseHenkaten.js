import { Sequelize } from "sequelize";

const db = new Sequelize("henkaten_board", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // mematikan log
});

export default db;
