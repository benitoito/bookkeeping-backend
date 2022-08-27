import { DataTypes} from "sequelize";
import database from "../../helpers/database";

import Customer from "./Customer";
import InventoryItem from "./InventoryItem";
import Service from "./Service";
import Transaction from "./Transaction";

const User = database.define('User', {
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true 
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

User.hasMany(Customer);
User.hasMany(Transaction);
User.hasMany(InventoryItem);
User.hasMany(Service);

export default User;