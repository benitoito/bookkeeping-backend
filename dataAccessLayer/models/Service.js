import { DataTypes} from "sequelize";
import database from "../../helpers/database.js";

import User from "./User.js";
import InventoryItem from "./InventoryItem.js";
import Transaction from "./Transaction.js";

const Service = database.define("Service", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
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

// Service.belongsTo(User);
// Service.belongsTo(Transaction);
// Service.hasMany(InventoryItem);

export default Service;