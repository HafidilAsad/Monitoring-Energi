import { Sequelize } from "sequelize";

const db = new Sequelize("monitoring-gas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
