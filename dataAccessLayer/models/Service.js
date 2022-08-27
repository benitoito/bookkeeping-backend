import { DataTypes} from "sequelize";
import database from "../../helpers/database";

import User from "./User";
import InventoryItem from "./InventoryItem";
import Transaction from "./Transaction";

const Service = database.define("Service", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING
    },
    rate: {
        type: DataTypes.FLOAT(11, 2)
    },
});

Service.belongsTo(User);
Service.belongsTo(Transaction);
Service.hasMany(InventoryItem);

export default Service;