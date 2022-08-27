import { DataTypes} from "sequelize";
import database from "../../helpers/database.js";

import PseudoInventoryItem from "./PseudoInventoryItem.js";
import User from "./User.js";
import Transaction from "./Transaction.js";
import Service from "./Service.js";

const InventoryItem = database.define("InventoryItem", {
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
    quantity: {
        type: DataTypes.INTEGER
    },
    pricePerUnit: {
        type: DataTypes.FLOAT(11, 2)
    }
});

// InventoryItem.hasOne(PseudoInventoryItem);
// InventoryItem.belongsTo(Service);
// InventoryItem.belongsTo(User);
// InventoryItem.belongsTo(Transaction);

export default InventoryItem;