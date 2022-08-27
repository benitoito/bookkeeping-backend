import { DataTypes} from "sequelize";
import database from "../../helpers/database";

import User from "./User";
import InventoryItem from "./InventoryItem";
import Customer from "./Customer";
import Service from "./Service";

const Transaction = database.define("Transaction", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    type: {
        type: DataTypes.ENUM("INCOME", "EXPENSE")
    },
    amount: {
        type: DataTypes.FLOAT(11, 2)
    }
});

Transaction.belongsTo(User);
Transaction.belongsTo(Customer);
Transaction.hasMany(InventoryItem);
Transaction.hasMany(Service);

export default Transaction;