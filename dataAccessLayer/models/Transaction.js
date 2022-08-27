import { DataTypes} from "sequelize";
import database from "../../helpers/database.js";

import User from "./User.js";
import InventoryItem from "./InventoryItem.js";
import Customer from "./Customer.js";
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

// Transaction.belongsTo(User);
// Transaction.belongsTo(Customer);
// Transaction.hasMany(InventoryItem);
// Transaction.hasMany(Service);

export default Transaction;