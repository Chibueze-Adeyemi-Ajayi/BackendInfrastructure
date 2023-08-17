// setting up the application to use enviromental variables
require('dotenv').config();

// exporting the enviromental variables
export const PORT = process.env.PORT ||  ""; 