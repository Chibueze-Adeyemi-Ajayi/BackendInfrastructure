import { TIME } from ".";
import { info } from "../../helper";

const cron = require("node-cron");

export class CronService {
    public systemLogger = () => {
        cron.schedule(TIME.ONE_MINUTE, () => {
            const time = (new Date().toISOString());
            info("System Logging: ", `[${time}]`);
        }); 
    }
}