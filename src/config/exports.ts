// setting up the application to use enviromental variables
require('dotenv').config();

// exporting the enviromental variables
export const LOCAL_PORT = process.env.LOCAL_PORT ||  "";