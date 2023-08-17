"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const _1 = require(".");
const helper_1 = require("../../helper");
const cron = require("node-cron");
class CronService {
    constructor() {
        this.systemLogger = () => {
            cron.schedule(_1.TIME.ONE_MINUTE, () => {
                const time = (new Date().toISOString());
                (0, helper_1.info)("System Logging: ", `[${time}]`);
            });
        };
    }
}
exports.CronService = CronService;
