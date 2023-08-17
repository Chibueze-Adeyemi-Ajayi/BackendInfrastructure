import { Request, Response } from "express";
import { Isignup } from ".";
import { AuthService } from "./AuthService"
import { sendRespnse } from "../helper";

export class AuthController {
    private _authService: AuthService = new AuthService();
    public signup = async (req:Request, res:Response) => {
        let data:Isignup = req.body;
        res.json(sendRespnse(await this._authService.signup(data)));
    }
}