import { Model, Optional, STRING } from "sequelize";
import sequelizeConnection from "../db-config";

interface DutyAttributes {
  id: string;
  name: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface DutyInput extends Optional<DutyAttributes, "id"> {}
export interface DutyOutput extends Required<DutyAttributes> {}

class DutyModel
  extends Model<DutyAttributes, DutyInput>
  implements DutyAttributes
{
  public id!: string;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

DutyModel.init(
  {
    id: {
      type: STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
  }
);

export default DutyModel;
