"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const helper_1 = require("../helper");
const webhook_1 = require("../services/webhook");
class AuthService {
    constructor() {
        this._webhookService = new webhook_1.WebHookService();
        this.signup = (data) => __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.serviceLog)("Signup");
            let body = {
                method: webhook_1.HOOK_REQUEST_METHOD.POST,
                url: "/signup",
                body: data,
                type: webhook_1.HOOK_REQUEST_TYPE.SIGNUP,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Signature": "my signature"
                }
            };
            const res = yield this._webhookService.sendRequest(body);
            return "Jilo -Billionaire" + res;
        });
    }
}
exports.AuthService = AuthService;
