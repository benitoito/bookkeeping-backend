import { DataTypes} from "sequelize";
import database from "../../helpers/database.js";

import Customer from "./Customer.js";
import InventoryItem from "./InventoryItem.js";
import Service from "./Service.js";
import Transaction from "./Transaction.js";

const User = database.define('User', {
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true  
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.hasMany(Customer);
Customer.belongsTo(User);

User.hasMany(Transaction);
Transaction.belongsTo(User);

User.hasMany(InventoryItem);
InventoryItem.belongsTo(User);

User.hasMany(Service);
Service.belongsTo(User);

export default User;