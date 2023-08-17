"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCAL_PORT = void 0;
// setting up the application to use enviromental variables
require('dotenv').config();
// exporting the enviromental variables
exports.LOCAL_PORT = process.env.LOCAL_PORT || "";
