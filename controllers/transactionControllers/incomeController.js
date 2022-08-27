import { userHasAccess } from "../../utilities/verifyUser.js";
import { enterIncomeQuery } from "../../dataAccessLayer/transactionQueries.js";

export const enterIncome = async (req, res) => {
    try {
        const user = userHasAccess(req);
        if(!user) {
            res.send({
                status: 400,
                message: "Token invalid"

            })
        }
        enterIncomeQuery()
        
        res.send("Income Entered!")
    } catch (error) {
        
    }
}