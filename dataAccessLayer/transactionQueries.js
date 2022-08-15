import { connectToDataBase, checkConnection } from "./dbConnection.js";


export const enterIncome = () => {
    const connection = connectToDataBase("CONNECTION");
    return new Promise((resolve, reject) => {
        connection.query()
    })
}