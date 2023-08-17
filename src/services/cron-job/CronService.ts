import { TIME } from ".";
import { info } from "../../helper";

const cron = require("node-cron");

export class CronService {
    private schedule = async (time:string, callback:Function) => {
        cron.schedule(time, callback);
    }
    public systemLogger = () => {
        this.schedule(TIME.ONE_MINUTE, () => {
            const time:Date = (new Date());
            info("System Logging:", `${time.toISOString()}`);
        }); 
    }
}