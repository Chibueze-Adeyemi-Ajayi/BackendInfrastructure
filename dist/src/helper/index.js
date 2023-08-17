"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErr = exports.sendRespnse = exports.info = exports.error = exports.warn = exports.log = void 0;
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
