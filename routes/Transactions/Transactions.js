import express from "express";

import { userHasAccess } from "../../utilities/verifyUser.js";

import { enterIncome } from "../../controllers/transactionControllers/incomeController.js";
import { enterExpense } from "../../controllers/transactionControllers/expenseController.js";

const transactionsRouter = express.Router();

transactionsRouter.post('/income', enterIncome);
transactionsRouter.post('/expense', enterExpense);

export default transactionsRouter;