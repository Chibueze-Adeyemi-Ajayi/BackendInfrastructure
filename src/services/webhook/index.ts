import { BASE_URL } from "../../config/exports";
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

export const SERVER_URL = {
    PROXY:BASE_URL,
    APPLICATION: "/f2a/application-server/v1"
}