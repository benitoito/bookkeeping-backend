import { DataTypes} from "sequelize";
import database from "../../helpers/database";

import User from "./User";
import Transaction from "./Transaction";

const Customer = database.define('Customer', {
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true 
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Customer.belongsTo(User);
Customer.hasMany(Transaction);

export default Customer;