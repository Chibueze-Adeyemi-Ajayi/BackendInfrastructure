import { BASE_URL, PORT } from "./src/config/exports";
import express from "express";
import { info } from "./src/helper";
import { Application } from "./src/app";
import { CronController } from "./src/services/cron-job";
import { CONFIGURATION_STATE } from "./src/config";
 
// using the enviromental port
const port = PORT,
      app = express();
app.use(express.urlencoded({ extended: true }));

// mounting routes;
const application = new Application();
application.mountRoutes(app);

// mounting cron jobs
const cronController = new CronController();
cronController.systemLogger(); // every one minute system logger

const config = CONFIGURATION_STATE.DEVELOPMENT; //you can set it to production or preproduction 

app.listen(port, () => info(`Application listening on:`, {port}, {BASE_URL}));

// configuring the application 
export {config};