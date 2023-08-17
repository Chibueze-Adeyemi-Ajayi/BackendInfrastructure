import { config } from "../..";
import { CONFIGURATION_STATE } from "../config";
import { BASE_URL, LOCAL_URL, PRE_PROD_URL, PRODUCTION_URL } from "../config/exports";

export function log(...msg:any[]) {
    console.log(...msg);
}

export function warn(...msg:any[]) {
    console.warn(...msg);
}

export function error(...msg:any[]) {
    console.error(...msg);
}

export function info(...msg:any[]) {
    console.info(...msg);
}

export function serviceLog (...args:any[]) {
    const timestamp:number = new Date().getTime()
    console.log(`[ ${[...args]} =>`, timestamp, "]");
}

export function sendRespnse (msg:any, code = 200) {
    return {
        code: code,
        msg: msg
    }
}

export function sendErr (msg:any, code = 400) {
    return {
        code: code,
        msg: msg
    }
}

export const pathFormat = (path:string) => `${BASE_URL}${path}`;

export function formatRSAKey (key:string) {
    const formattedRSAKey = key.replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t');
    return formattedRSAKey
}   

export const getDevelopementState = () => config;

export function getHookURL () {
    let state = getDevelopementState();
    if (state == CONFIGURATION_STATE.DEVELOPMENT) return LOCAL_URL;
    if (state == CONFIGURATION_STATE.PRE_PRODUCTION) return PRE_PROD_URL;
    if (state == CONFIGURATION_STATE.PRODUCTION) return PRODUCTION_URL;
}