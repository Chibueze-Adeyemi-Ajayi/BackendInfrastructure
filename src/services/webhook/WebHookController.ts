import { IWebHookRequest, WebHookService } from ".";

export class WebHookController {
    private _webhookService = new WebHookService();
    public sendRequest = async (data:IWebHookRequest) => {
        return this._webhookService.sendRequest(data)
    }
}