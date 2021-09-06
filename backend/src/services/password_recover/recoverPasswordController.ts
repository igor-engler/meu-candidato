import { Request, Response } from "express";
import { RecoverPassword } from "./recoverPassword";

class RecoverPasswordController{
    constructor(private recoverPasswordService: RecoverPassword){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { email } = request.body;
        
        try{
            const token = await this.recoverPasswordService.execute({email});
            return response.status(201).json(token);
        } catch(error: any){
            return response.status(error.code).json({ "Error": error.message });
        }
    };
};

export { RecoverPasswordController };