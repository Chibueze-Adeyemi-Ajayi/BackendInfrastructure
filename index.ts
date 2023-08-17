import { PORT } from "./src/config/exports";
import express from "express";
import { info } from "./src/helper";
import { Application } from "./src/app";
import { CronController } from "./src/services/cron-job";
 
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

app.listen(port, () => info(`Application listening on:`, port));