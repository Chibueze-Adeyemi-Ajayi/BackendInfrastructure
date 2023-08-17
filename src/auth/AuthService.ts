import { Isignup } from ".";
import { serviceLog } from "../helper";

export class AuthService {
    public signup = async (data:Isignup) => {
        serviceLog("Signup Service")
        return "Jilo -Billionaire"
    }
}