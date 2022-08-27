import express from "express";

import { userHasAccess } from "../../middleware/verifyUser.js";

import { transactionController } from "../../controllers/transactionControllers/transactionController.js";

const transactionsRouter = express.Router();

const income = transactionController("INCOME");
const expense = transactionController("EXPENSE");

transactionsRouter.post('/income', userHasAccess, income);
transactionsRouter.post('/expense', userHasAccess, expense);

export default transactionsRouter;