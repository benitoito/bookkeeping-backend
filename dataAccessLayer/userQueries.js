import { connectToDataBase, checkConnection } from "./dbConnection.js";
import { trace } from "../utilities/util.js";


export const createUser = ({firstName, lastName, email, password}) => {
    const connection = connectToDataBase("CONNECTION");
    return new Promise((resolve, reject) => {
        connection.query(
            `
            INSERT INTO 
                app_user
            (first_name, last_name, email, password)
            VALUES 
                (?,?,?,?)    
            `,
            [firstName, lastName, email, password],
            (error, results) => {
                connection.destroy()
                if(error){
                    trace("CREATE USER ERROR")(error)
                    return reject(error)
                } 
                trace("CREATE USER RESULT: Affected Rows:")(results.affectedRows) 
                return resolve({firstName, lastName, email})
            }
        )
    })
}

export const getUserByEmail = (email) => {
    const connection = connectToDataBase("CONNECTION");
    return new Promise((resolve, reject) => {
        connection.query(
            `
            SELECT * FROM app_user WHERE email=?;
            `,
            [email],
            (error, result) => {
                // connection.destroy()
                if(error) {
                    console.log("userQueries: line 41",error)
                    return reject(error) 
                } 
                console.log(result)
                return resolve(result[0])
            }
        )
    })
}


