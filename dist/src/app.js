"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const auth_1 = require("./auth");
class Application {
    constructor() {
        this.mountRoutes = (express) => {
            express.use("/auth", auth_1.AuthRouter);
        };
    }
}
exports.Application = Application;
