import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("postgres", "user", "password", {
  dialect: "postgres",
  host: "localhost:5432",
});
