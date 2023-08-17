import { Isignup } from ".";
import { WEBTOKEN } from "../config/exports";
import { log, serviceLog } from "../helper";
import { CryptoService } from "../services/cryptograph/CryptoService";
import { HOOK_REQUEST_METHOD, HOOK_REQUEST_TYPE, IWebHookRequest, SERVER_URL, WebHookService } from "../services/webhook";

export class AuthService {
    private _webhookService = new WebHookService();
    private _cryptoService = new CryptoService();
    public signup = async (data:Isignup) => {

        serviceLog("Signup");

        const webhook_key = WEBTOKEN;

        const unique_code = new Date().getTime();

        let payload:any = {webhook_key, data, unique_code}; payload = JSON.stringify(payload);

        const enc_key = this._cryptoService.encrypt(payload),
              signature = this._cryptoService.getSignature(enc_key);
        serviceLog("Cryptography")

        let body : IWebHookRequest = {
            method: HOOK_REQUEST_METHOD.POST,
            url: SERVER_URL.APPLICATION + "/signup",
            body: enc_key,
            type: HOOK_REQUEST_TYPE.SIGNUP,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Signature": signature
            }
        }

        log({body});

        const res = await this._webhookService.sendRequest(body)
        return "Jilo -Billionaire" + res
    }
}