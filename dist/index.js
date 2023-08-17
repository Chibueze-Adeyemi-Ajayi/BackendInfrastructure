"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exports_1 = require("./src/config/exports");
const express_1 = __importDefault(require("express"));
const helper_1 = require("./src/helper");
// using the enviromental port
const port = exports_1.LOCAL_PORT, app = (0, express_1.default)();
app.listen(port, () => (0, helper_1.info)(`Application listening on:`, port));
