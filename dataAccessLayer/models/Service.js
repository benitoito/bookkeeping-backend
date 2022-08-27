import { DataTypes} from "sequelize";
import database from "../../helpers/database.js";

const Service = database.define("Service", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING
    },
    rate: {
        type: DataTypes.FLOAT(11, 2)
    },
});

export default Service;