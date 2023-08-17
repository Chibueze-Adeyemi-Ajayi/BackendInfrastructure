import { Isignup } from ".";
import { WEBTOKEN } from "../config/exports";
import { serviceLog } from "../helper";
import { CryptoService } from "../services/cryptograph/CryptoService";
import { HOOK_REQUEST_METHOD, HOOK_REQUEST_TYPE, IWebHookRequest, WebHookService } from "../services/webhook";

export class AuthService {
    private _webhookService = new WebHookService();
    private _cryptoService = new CryptoService();
    public signup = async (data:Isignup) => {

        serviceLog("Signup");

        const webhook_key = WEBTOKEN;

        let payload:any = {webhook_key, data}; payload = JSON.stringify(payload);

        const enc_key = this._cryptoService.encrypt(payload),
              signature = this._cryptoService.getSignature(enc_key);

        let body : IWebHookRequest = {
            method: HOOK_REQUEST_METHOD.POST,
            url: "/signup",
            body: payload,
            type: HOOK_REQUEST_TYPE.SIGNUP,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Signature": signature
            }
        }
        const res = await this._webhookService.sendRequest(body)
        return "Jilo -Billionaire" + res
    }
}