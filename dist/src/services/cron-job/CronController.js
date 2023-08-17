"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronController = void 0;
const CronService_1 = require("./CronService");
class CronController {
    constructor() {
        this._cronService = new CronService_1.CronService();
        this.systemLogger = () => {
            return this._cronService.systemLogger();
        };
    }
}
exports.CronController = CronController;
