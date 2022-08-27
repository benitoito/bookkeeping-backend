import { DataTypes} from "sequelize";
import database from "../../helpers/database";

import PseudoInventoryItem from "./PseudoInventoryItem";
import User from "./User";
import Transaction from "./Transaction";
import Service from "./Service";

const InventoryItem = database.define("InventoryItem", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    pricePerUnit: {
        type: DataTypes.FLOAT(11, 2)
    }
});

InventoryItem.hasOne(PseudoInventoryItem);
InventoryItem.belongsTo(Service);
InventoryItem.belongsTo(User);
InventoryItem.belongsTo(Transaction);

export default InventoryItem;