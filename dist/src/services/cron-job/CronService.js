"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const _1 = require(".");
const helper_1 = require("../../helper");
const cron = require("node-cron");
class CronService {
    constructor() {
        this.schedule = (time, callback) => __awaiter(this, void 0, void 0, function* () {
            cron.schedule(time, callback);
        });
        this.systemLogger = () => {
            this.schedule(_1.TIME.ONE_MINUTE, () => {
                const time = (new Date().toISOString());
                (0, helper_1.info)("System Logging:", `${time}`);
            });
        };
    }
}
exports.CronService = CronService;
