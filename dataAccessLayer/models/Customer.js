import { DataTypes} from "sequelize";
import database from "../../helpers/database.js";

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

Customer.hasMany(Transaction, { foreignKey: "customerId" });
Transaction.belongsTo(Customer, { foreignKey: "customerId" });

export default Customer;