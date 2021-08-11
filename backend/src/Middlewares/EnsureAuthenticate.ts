import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../Errors/AppError";
import { UsersRepository } from "../Modules/Users/Repositories/implementations/UsersRepository";

interface IPayload{
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authHeader = request.headers.authorization;

    if (!authHeader){
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try{
        const { sub: email } = verify(token, "a0584206876f7b1479289a7b40db63fd") as IPayload;

        const userRepositories = new UsersRepository();
        const user = userRepositories.findByEmail(email);

        if(!user){
            throw new AppError("Usuário não cadastrado!", 401);
        }

        next();
    } catch{
        throw new AppError("Usuário não autenticado!", 401);
    }
}