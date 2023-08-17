"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebHookService = exports.WebHookController = exports.HOOK_REQUEST_METHOD = exports.HOOK_REQUEST_TYPE = void 0;
const WebHookController_1 = require("./WebHookController");
Object.defineProperty(exports, "WebHookController", { enumerable: true, get: function () { return WebHookController_1.WebHookController; } });
const WebHookService_1 = require("./WebHookService");
Object.defineProperty(exports, "WebHookService", { enumerable: true, get: function () { return WebHookService_1.WebHookService; } });
var HOOK_REQUEST_TYPE;
(function (HOOK_REQUEST_TYPE) {
    HOOK_REQUEST_TYPE[HOOK_REQUEST_TYPE["SIGNUP"] = 0] = "SIGNUP";
    HOOK_REQUEST_TYPE[HOOK_REQUEST_TYPE["SIGNIN"] = 1] = "SIGNIN";
})(HOOK_REQUEST_TYPE || (exports.HOOK_REQUEST_TYPE = HOOK_REQUEST_TYPE = {}));
var HOOK_REQUEST_METHOD;
(function (HOOK_REQUEST_METHOD) {
    HOOK_REQUEST_METHOD["GET"] = "get";
    HOOK_REQUEST_METHOD["POST"] = "post";
    HOOK_REQUEST_METHOD["PUT"] = "put";
    HOOK_REQUEST_METHOD["DELETE"] = "delete";
})(HOOK_REQUEST_METHOD || (exports.HOOK_REQUEST_METHOD = HOOK_REQUEST_METHOD = {}));
