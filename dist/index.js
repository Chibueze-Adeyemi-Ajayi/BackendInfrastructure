"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exports_1 = require("./src/config/exports");
const express_1 = __importDefault(require("express"));
const helper_1 = require("./src/helper");
const app_1 = require("./src/app");
const cron_job_1 = require("./src/services/cron-job");
// using the enviromental port
const port = exports_1.PORT, app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
// mounting routes;
const application = new app_1.Application();
application.mountRoutes(app);
// mounting cron jobs
const cronController = new cron_job_1.CronController();
cronController.systemLogger(); // every one minute system logger
// configuring the application 
app.listen(port, () => (0, helper_1.info)(`Application listening on:`, { port }, { BASE_URL: exports_1.BASE_URL }));
