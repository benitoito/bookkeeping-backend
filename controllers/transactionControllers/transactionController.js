import { create } from "../../dataAccessLayer/services/TransactionService.js"

export const transactionController = (type) => async (req, res, next) => {
    try {
        const userId = req.token.id;
        const result = await create({ ...req.body, userId, type })
        res.status(201);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error)
    }
}