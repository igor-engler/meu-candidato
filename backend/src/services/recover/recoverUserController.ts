import { Request, Response } from "express";
import { RecoverUser } from "./recoverUser";

class RecoverUserController{
    constructor(private recoverUserService: RecoverUser){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { email } = request.body;
        
        try{
            const token = await this.recoverUserService.execute({email});
            return response.status(201).json(token);
        } catch(error: any){
            return response.status(error.code).json({ "Error": error.message });
        }
    };
};

export { RecoverUserController };