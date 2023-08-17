import { AuthRouter } from "./auth";
import { pathFormat } from "./helper";

export class Application {
    public mountRoutes = (express:any) => {
        express.get(pathFormat("/"), (req:any, res:any) => { req; res.send("Welcome to Future Academy Africa"); })
        express.use(pathFormat("/auth"), AuthRouter) // auth router
    }
}