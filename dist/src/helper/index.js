"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathFormat = exports.sendErr = exports.sendRespnse = exports.serviceLog = exports.info = exports.error = exports.warn = exports.log = void 0;
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
    const timestamp = new Date().getMilliseconds();
    console.log(`[ Call: ${[...args]} ] @`, timestamp);
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
