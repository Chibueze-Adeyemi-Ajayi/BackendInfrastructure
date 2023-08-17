import { Router } from "express";
import { AuthController } from "./AuthController";

const AuthRouter = Router(),
      authController = new AuthController();

AuthRouter.post("/signup", authController.signup);

export default AuthRouter;