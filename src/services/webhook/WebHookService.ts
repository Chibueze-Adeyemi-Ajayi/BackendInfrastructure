import { IWebHookRequest } from ".";
import { serviceLog } from "../../helper";

export class WebHookService {
    public sendRequest = async (data:IWebHookRequest) => {
        serviceLog("Webhook")
    }
}