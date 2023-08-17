import { CronService } from "./CronService";

export class CronController {
    private _cronService = new CronService();
    public systemLogger = () => {
        return this._cronService.systemLogger();
    }
}