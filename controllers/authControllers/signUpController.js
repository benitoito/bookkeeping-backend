import bcrypt from "bcryptjs";
import { createUser } from "../../dataAccessLayer/userQueries.js";


export const signUp = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);

        let user = req.body;
        user.password = bcrypt.hashSync(user.password, salt)
        const result = await createUser(user)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}