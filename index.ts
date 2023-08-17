import { LOCAL_PORT } from "./src/config/exports";
import express from "express";
import { info } from "./src/helper";
 
// using the enviromental port
const port = LOCAL_PORT,
      app = express();
 

app.listen(port, () => info(`Application listening on:`, port));

 