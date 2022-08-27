import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { findByEmail } from "../../dataAccessLayer/services/UserService.js";

export const login = async (req, res) => {
    try {
        const user = await findByEmail(req.body.email)
        const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
        if(!passwordsMatch) throw "The email or password is incorrect.";

        const token = jwt.sign(
            { firstName: user.first_name, lastName: user.last_name, email: user.email, id: user.id }, 
            process.env.JWT_SECRET,
            // {expiresIn: ""}
        );
        res.status(200)
        res.send({
            token: token,
            status: 200,
            message: "Access Granted!"
        })

    } catch (error) {
        res.send({
            status: 400,
            message: "Access Denied.",
            error: error
        })
    }
}