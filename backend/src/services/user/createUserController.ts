import { Request, Response } from "express";
import { CreateUser } from "./createUsers";

class CreateUserController{
    constructor(private createUserService: CreateUser){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { email, name, password } = request.body;
        
        try{
            await this.createUserService.execute({ email, name, password });
        } catch(error){
            return response.status(error.code).json({ "Error": error.message });
        }

        return response.status(201).json({"Sucess": "Usuário criado"})
    };
};

export { CreateUserController };