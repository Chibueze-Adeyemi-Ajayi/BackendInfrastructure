import { WebHookController } from "./WebHookController";
import { WebHookService } from "./WebHookService";

export enum HOOK_REQUEST_TYPE {
    SIGNUP, SIGNIN
}

export enum HOOK_REQUEST_METHOD {
    GET = "get", POST = "post", PUT = "put", DELETE = "delete"
}

export {
    WebHookController, WebHookService
}

export interface IWebHookRequest {
    type: HOOK_REQUEST_TYPE;
    method: HOOK_REQUEST_METHOD;
    url: string;
    body?: any;
    headers: any;
    query?: any;
    params?: any;
    cookies?: any;
    files?: any;
}