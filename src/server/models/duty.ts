import { STRING } from "sequelize";
import { sequelize } from "../utils/database";

export const Duty = sequelize.define("duty", {
  id: {
    type: STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
});
