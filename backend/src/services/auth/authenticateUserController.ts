import { Request, Response } from "express";
import { AuthenticateUser } from "./authenticateUser";

class AuthenticateUserController{
    constructor(private authenticateUserService: AuthenticateUser){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { email, password } = request.body;
        
        try{
            const token = await this.authenticateUserService.execute({email, password});
            return response.status(201).json(token);
        } catch(error: any){
            return response.status(error.code).json({ "Error": error.message });
        }
    };
};

export { AuthenticateUserController };