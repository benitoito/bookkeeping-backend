import { DataTypes} from "sequelize";
import database from "../../helpers/database.js";

import InventoryItem from "./InventoryItem.js";

const PseudoInventoryItem = database.define("PseudoInventoryItem", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    quantity: {
        type: DataTypes.INTEGER
    }
});

// PseudoInventoryItem.belongsTo(InventoryItem);

export default PseudoInventoryItem;