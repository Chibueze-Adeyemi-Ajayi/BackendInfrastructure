"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHookURL = exports.getDevelopementState = exports.formatRSAKey = exports.pathFormat = exports.sendErr = exports.sendRespnse = exports.serviceLog = exports.info = exports.error = exports.warn = exports.log = void 0;
const __1 = require("../..");
const config_1 = require("../config");
const exports_1 = require("../config/exports");
function log(...msg) {
    console.log(...msg);
}
exports.log = log;
function warn(...msg) {
    console.warn(...msg);
}
exports.warn = warn;
function error(...msg) {
    console.error(...msg);
}
exports.error = error;
function info(...msg) {
    console.info(...msg);
}
exports.info = info;
function serviceLog(...args) {
    const timestamp = new Date().getTime();
    console.log(`[ ${[...args]} =>`, timestamp, "]");
}
exports.serviceLog = serviceLog;
function sendRespnse(msg, code = 200) {
    return {
        code: code,
        msg: msg
    };
}
exports.sendRespnse = sendRespnse;
function sendErr(msg, code = 400) {
    return {
        code: code,
        msg: msg
    };
}
exports.sendErr = sendErr;
const pathFormat = (path) => `${exports_1.BASE_URL}${path}`;
exports.pathFormat = pathFormat;
function formatRSAKey(key) {
    const formattedRSAKey = key.replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t');
    return formattedRSAKey;
}
exports.formatRSAKey = formatRSAKey;
const getDevelopementState = () => __1.config;
exports.getDevelopementState = getDevelopementState;
function getHookURL() {
    let state = (0, exports.getDevelopementState)();
    if (state == config_1.CONFIGURATION_STATE.DEVELOPMENT)
        return exports_1.LOCAL_URL;
    if (state == config_1.CONFIGURATION_STATE.PRE_PRODUCTION)
        return exports_1.PRE_PROD_URL;
    if (state == config_1.CONFIGURATION_STATE.PRODUCTION)
        return exports_1.PRODUCTION_URL;
}
exports.getHookURL = getHookURL;
