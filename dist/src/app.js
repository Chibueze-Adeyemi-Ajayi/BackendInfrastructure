"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
class Application {
    constructor() {
        this._app = null;
        this.mountRoutes = (express) => {
            this._app.use("/auth");
        };
    }
}
exports.Application = Application;
