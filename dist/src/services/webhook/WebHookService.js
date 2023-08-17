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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebHookService = void 0;
const axios_1 = __importDefault(require("axios"));
const _1 = require(".");
const helper_1 = require("../../helper");
class WebHookService {
    constructor() {
        this._hookResponse = (msg, code = 200) => {
        };
        this.sendRequest = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                (0, helper_1.serviceLog)("Webhook");
                let url = (0, helper_1.getHookURL)() + data.url + (("/" + (data.params || ""))), payload = data.body || data.query;
                (0, helper_1.log)({ url, payload });
                if (data.method == _1.HOOK_REQUEST_METHOD.POST) {
                    const response = yield axios_1.default.post(url, payload);
                    return response;
                }
            }
            catch (e) {
                return this._hookResponse(e, 400);
            }
        });
    }
}
exports.WebHookService = WebHookService;
