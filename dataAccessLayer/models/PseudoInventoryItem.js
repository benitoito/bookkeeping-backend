import { DataTypes} from "sequelize";
import database from "../../helpers/database.js";


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


export default PseudoInventoryItem;