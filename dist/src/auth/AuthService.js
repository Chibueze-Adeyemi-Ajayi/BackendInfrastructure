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
const exports_1 = require("../config/exports");
const helper_1 = require("../helper");
const CryptoService_1 = require("../services/cryptograph/CryptoService");
const webhook_1 = require("../services/webhook");
class AuthService {
    constructor() {
        this._webhookService = new webhook_1.WebHookService();
        this._cryptoService = new CryptoService_1.CryptoService();
        this.signup = (data) => __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.serviceLog)("Signup");
            const webhook_key = exports_1.WEBTOKEN;
            const unique_code = new Date().getTime();
            let payload = { webhook_key, data, unique_code };
            payload = JSON.stringify(payload);
            const enc_key = this._cryptoService.encrypt(payload), signature = this._cryptoService.getSignature(enc_key);
            (0, helper_1.serviceLog)("Cryptography");
            let body = {
                method: webhook_1.HOOK_REQUEST_METHOD.POST,
                url: "/signup",
                body: enc_key,
                params: "mmmmm",
                type: webhook_1.HOOK_REQUEST_TYPE.SIGNUP,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Signature": signature
                }
            };
            (0, helper_1.log)({ body });
            const res = yield this._webhookService.sendRequest(body);
            return "Jilo -Billionaire" + res;
        });
    }
}
exports.AuthService = AuthService;
