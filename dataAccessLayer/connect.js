import { Sequelize } from "sequelize";

const sequelize = new Sequelize('database', 'username', 'password', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }