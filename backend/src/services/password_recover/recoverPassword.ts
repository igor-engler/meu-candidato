import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { Mailer } from '../../frameworks/nodemailer/Inodemailer';
import { AppError } from '../../errors/appError';

interface IRequest{
    email: string;
}

class RecoverPassword{
    constructor(private userRepository: IUserRepository){};

    async execute({ email }: IRequest): Promise<void>{
        const emailExists = await this.userRepository.findByEmail(email);

        if(!emailExists){
            throw new AppError("Usuário não encontrado!");
        }

        console.log(emailExists);

        await Mailer.sendEmail(
            "Teste de email",
            "Recuperação de senha", 
            '"Não Responda" <no-reply@teste.com>', 
            email);

        //const passwordEncrypted = await EncryptInfo.hash(password, 8);
    }
};

export { RecoverPassword };