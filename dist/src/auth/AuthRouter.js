"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("./AuthController");
const AuthRouter = (0, express_1.Router)(), authController = new AuthController_1.AuthController();
AuthRouter.use("/signup", authController.signup);
exports.default = AuthRouter;
