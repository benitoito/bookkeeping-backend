import bcrypt from "bcryptjs";
import { create } from "../../dataAccessLayer/services/UserService.js";

export const signUp = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        let user = req.body;
        user.password = bcrypt.hashSync(user.password, salt);
        const result = await create(user);
        console.log("RESULT......",result)
        res.status(201);
        res.send(result)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
};