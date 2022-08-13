import "dotenv/config";
import mysql from 'mysql2';

export const connectToDataBase = (connectionType) => {
    if (connectionType = "CONNECTION") {
        const connection = mysql.createConnection({
            host     : process.env.DB_HOST,
            user     : process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_NAME,
            // port     : process.env.DB_PORT
        });
        connection.connect();

        return connection;
    }else if (connectionType === "POOL"){
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        return pool;
    }
};

export const checkConnection = (connection) => {
    if(connection.state === 'disconnected'){
        console.log("CONNECTION STATE ",connection.state)
        return false;
    }
    console.log("CONNECTION STATE ",connection.state)
    return true;
}