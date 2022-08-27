import { DataTypes} from "sequelize";
import database from "../../helpers/database";

import InventoryItem from "./InventoryItem";

const PseudoInventoryItem = database.define("PseudoInventoryItem", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER
    }
});

PseudoInventoryItem.belongsTo(InventoryItem);

export default PseudoInventoryItem;