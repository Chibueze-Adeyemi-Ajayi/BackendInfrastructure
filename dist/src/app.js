"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const auth_1 = require("./auth");
const helper_1 = require("./helper");
class Application {
    constructor() {
        this.mountRoutes = (express) => {
            express.get((0, helper_1.pathFormat)("/"), (req, res) => { req; res.send("Welcome to Future Academy Africa"); });
            express.use((0, helper_1.pathFormat)("/auth"), auth_1.AuthRouter); // auth router
        };
    }
}
exports.Application = Application;
