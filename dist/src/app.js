"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const auth_1 = require("./auth");
const exports_1 = require("./config/exports");
class Application {
    constructor() {
        this.mountRoutes = (express) => {
            express.use(`${exports_1.BASE_URL}/auth`, auth_1.AuthRouter); // auth router
        };
    }
}
exports.Application = Application;
