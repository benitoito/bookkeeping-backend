import { userHasAccess } from "../../utilities/verifyUser.js";

export const enterIncome = async (req, res) => {
    try {
        const user = userHasAccess(req);
        if(!user) {
            res.send({
                status: 400,
                message: "Token invalid"

            })
        }
        
        res.send("Income Entered!")
    } catch (error) {
        
    }
}