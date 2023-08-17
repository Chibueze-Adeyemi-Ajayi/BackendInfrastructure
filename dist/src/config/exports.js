"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_URL = exports.PORT = void 0;
// setting up the application to use enviromental variables
require('dotenv').config();
// exporting the enviromental variables
exports.PORT = process.env.PORT || "";
exports.BASE_URL = process.env.BASE_URL || "";
