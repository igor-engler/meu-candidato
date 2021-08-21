import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { AppError } from '../../errors/appError';
import { EncryptInfo } from "../../frameworks/bcrypt/Ibcrypt";

interface IRequest{
    email: string;
    name: string;
    password: string;
}

class CreateUser{
    constructor(private userRepository: IUserRepository){};

    async execute({ email, name, password }: IRequest): Promise<void>{
        const emailInUse = await this.userRepository.findByEmail(email);

        if(emailInUse){
            throw new AppError("Usuário já cadastrado");
        }

        const passwordEncrypted = await EncryptInfo.hash(password, 8);

        await this.userRepository.create({email, name, password: passwordEncrypted });
    }
};

export { CreateUser };