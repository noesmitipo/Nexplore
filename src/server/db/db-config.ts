import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize(
  "postgres://user:password@localhost:5432/postgres",
  {
    dialect: "postgres",
    host: "localhost:5432",
  }
);

export default sequelizeConnection;
