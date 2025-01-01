
import {DataTypes, Model} from "sequelize";
import {Resident} from "@/model/interface";
import {generateRandomString} from "@/utils";
import {ID_CHAR_LENGTH} from "@/constant";
import {dbContext} from "@/services/database";

export class ResidentEntity extends Model implements Resident {
  id!: string;
  name!: string;
  houseNo!: number;
  phoneNo!: string;
}

ResidentEntity.init(
  {
    id: {
      type: DataTypes.STRING, // Use STRING for a random string, not INTEGER
      primaryKey: true,
      allowNull: false,
      defaultValue: () => generateRandomString(ID_CHAR_LENGTH), // Generate random ID on creation
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    houseNo: {
      type: new DataTypes.NUMBER(),
      allowNull: true,
    },
    phoneNo: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: 'residents',
    sequelize: dbContext, // this bit is important
  },
);
