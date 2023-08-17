import axios from "axios";
import { HOOK_REQUEST_METHOD, IWebHookRequest } from ".";
import { getHookURL, log, serviceLog } from "../../helper";

export class WebHookService {
    private _hookResponse = (msg:any, code = 200) => {

    }
    public sendRequest = async (data:IWebHookRequest) => {
      try {

        serviceLog("Webhook"); 

        let url = getHookURL() + data.url + (("/" + (data.params || ""))),
            payload = data.body || data.query; log({url, payload})
        if (data.method == HOOK_REQUEST_METHOD.POST) {
            const response = await axios.post(url, payload);
            return response
        }

      } catch (e:any) { return this._hookResponse(e, 400); }
        
    }
}