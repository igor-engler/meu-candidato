import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { AppError } from "../../../../Errors/AppError";
import { IUserRepository } from "../../Repositories/IUserRepository";

interface IRequest{
    email: string;
    password: string;
};

interface IResponse{
    user: {
        name: string,
        email: string
    };
    token: string;
}

class AuthenticateUserUseCase{
    constructor(private userRepositories: IUserRepository){ }

    async execute({email, password}: IRequest): Promise<IResponse>{
        const user = await this.userRepositories.findByEmail(email);

        if(!user){
            throw new AppError("Usuário ou senha incorreta");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new AppError("Usuário ou senha incorreta");
        }

        const token = sign({}, "a0584206876f7b1479289a7b40db63fd", {
            subject: user.email,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        };

        return tokenReturn;
    }
};

export { AuthenticateUserUseCase };