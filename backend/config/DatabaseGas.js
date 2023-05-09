import { Sequelize } from "sequelize";

const db = new Sequelize("monitoring-gas", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // mematikan log
});

export default db;
