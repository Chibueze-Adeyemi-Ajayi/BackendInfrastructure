import { AuthRouter } from "./auth";

export class Application {
    public mountRoutes = (express:any) => {
        express.use("/auth", AuthRouter) // auth router
    }
}