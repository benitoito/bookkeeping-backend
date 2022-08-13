import bcrypt from "bcryptjs";
import { getUserByEmail } from "../../dataAccessLayer/userQueries.js";

export const login = async (req, res) => {
    try {
        const user = await getUserByEmail(req.body.email)
        const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
        console.log("MATCH",passwordsMatch)
        if(!passwordsMatch) throw "The email or password is incorrect.";

        res.send("You're in!!!!")

        //TODO: generate JWT, send to user.
    } catch (error) {
        res.send(error)
    }
}