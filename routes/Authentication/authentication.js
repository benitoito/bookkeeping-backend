import express from "express";
import { signUp } from "../../controllers/authControllers/signUpController.js";
import { login } from "../../controllers/authControllers/loginController.js";

const authRouter = express.Router();

authRouter.post('/signup', signUp)
authRouter.post('/login', login)

export default authRouter;