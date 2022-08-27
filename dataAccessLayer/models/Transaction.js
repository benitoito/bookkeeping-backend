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


Transaction.belongsTo(InventoryItem);
InventoryItem.hasMany(Transaction);

Transaction.belongsTo(Service);
Service.hasMany(Transaction);

export default Transaction;