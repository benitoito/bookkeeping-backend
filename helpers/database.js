import { Sequelize } from "sequelize";

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: 3306
});

database.sync({ force:  true })

export default database;