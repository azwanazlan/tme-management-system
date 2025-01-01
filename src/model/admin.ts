// include admin model
// admin class extend model and implement admin interface

import {DataTypes, Model} from "sequelize";
import {Admin} from "@/model/interface";
import {dbContext} from "@/services/database";
import {generateRandomString} from "@/utils";
import {ID_CHAR_LENGTH} from "@/constant";

export class AdminEntity extends Model implements Admin {
  id!: string;
  username!: string;
  password!: string;
}

AdminEntity.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false, 
      defaultValue: () => generateRandomString(ID_CHAR_LENGTH),
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'admins',
    sequelize: dbContext,
  },
);
