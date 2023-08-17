"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRE_PROD_URL = exports.PRODUCTION_URL = exports.LOCAL_URL = exports.WEBTOKEN = exports.PUBLIC_KEY = exports.PRIVATE_KEY = exports.BASE_URL = exports.PORT = void 0;
// setting up the application to use enviromental variables
require('dotenv').config();
// exporting the enviromental variables
exports.PORT = process.env.PORT || "";
exports.BASE_URL = process.env.BASE_URL || "";
exports.PRIVATE_KEY = process.env.PRIVATE_KEY || "";
exports.PUBLIC_KEY = process.env.PUBLIC_KEY || "";
exports.WEBTOKEN = process.env.WEBTOKEN || "";
exports.LOCAL_URL = process.env.LOCAL_URL || "";
exports.PRODUCTION_URL = process.env.PRODUCTION_URL || "";
exports.PRE_PROD_URL = process.env.PRE_PROD_URL || "";
