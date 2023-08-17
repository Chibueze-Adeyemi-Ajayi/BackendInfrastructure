import { Isignup } from ".";
import { serviceLog } from "../helper";
import { HOOK_REQUEST_METHOD, HOOK_REQUEST_TYPE, IWebHookRequest, WebHookService } from "../services/webhook";

export class AuthService {
    private _webhookService = new WebHookService();
    public signup = async (data:Isignup) => {
        serviceLog("Signup");
        let body : IWebHookRequest = {
            method: HOOK_REQUEST_METHOD.POST,
            url: "/signup",
            body: data,
            type: HOOK_REQUEST_TYPE.SIGNUP,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Signature": "my signature"
            }
        }
        const res = await this._webhookService.sendRequest(body)
        return "Jilo -Billionaire" + res
    }
}