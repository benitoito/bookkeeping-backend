import { DataTypes} from "sequelize";
import database from "../../helpers/database.js";

import InventoryItem from "./InventoryItem.js";
import Service from "./Service.js";

const Transaction = database.define("Transaction", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    type: {
        type: DataTypes.ENUM("INCOME", "EXPENSE")
    },
    amount: {
        type: DataTypes.FLOAT(11, 2)
    }
});


Transaction.belongsTo(InventoryItem, { foreignKey: "inventoryItemId" });
InventoryItem.hasMany(Transaction, { foreignKey: "inventoryItemId" });

Transaction.belongsTo(Service, { foreignKey: "inventoryItemId" });
Service.hasMany(Transaction, { foreignKey: "inventoryItemId" });

export default Transaction;