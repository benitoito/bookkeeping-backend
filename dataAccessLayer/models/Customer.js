import { DataTypes} from "sequelize";
import database from "../../helpers/database.js";

import User from "./User.js";
import Transaction from "./Transaction.js";

const Customer = database.define('Customer', {
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Customer.belongsTo(User);
// Customer.hasMany(Transaction);

export default Customer;