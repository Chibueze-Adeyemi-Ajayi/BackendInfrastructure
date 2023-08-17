// setting up the application to use enviromental variables
require('dotenv').config();

// exporting the enviromental variables
export const PORT = process.env.PORT ||  ""; 
export const BASE_URL = process.env.BASE_URL || "";
export const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
export const PUBLIC_KEY = process.env.PUBLIC_KEY || "";
export const WEBTOKEN = process.env.WEBTOKEN || "";