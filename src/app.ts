import { AuthRouter } from "./auth";
import { BASE_URL } from "./config/exports";

export class Application {
    public mountRoutes = (express:any) => {
        express.use(`${BASE_URL}/auth`, AuthRouter) // auth router
    }
}