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

User.hasMany(Customer, { foreignKey: "userId" });
Customer.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Transaction, { foreignKey: "userId" });
Transaction.belongsTo(User, { foreignKey: "userId" });

User.hasMany(InventoryItem, { foreignKey: "userId" });
InventoryItem.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Service, { foreignKey: "userId" });
Service.belongsTo(User, { foreignKey: "userId" });

export default User;