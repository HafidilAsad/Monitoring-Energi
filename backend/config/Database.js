import { Sequelize } from "sequelize";

const db = new Sequelize("auth_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // mematikan log
});

export default db;
