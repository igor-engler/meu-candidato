import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { AppError } from '../../errors/appError';

interface IRequest{
    email: string;
}

class RecoverUser{
    constructor(private userRepository: IUserRepository){};

    async execute({ email }: IRequest): Promise<void>{
        const emailInUse = await this.userRepository.findByEmail(email);

        if(!emailInUse){
            throw new AppError("Usuário não encontrado!");
        }

        //const passwordEncrypted = await EncryptInfo.hash(password, 8);
    }
};

export { RecoverUser };