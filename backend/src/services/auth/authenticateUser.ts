import { AppError } from "../../errors/appError";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { Token } from "../../frameworks/jsonwebtoken/Ijsonwebtoken";
import { EncryptInfo } from "../../frameworks/bcrypt/Ibcrypt";


interface IRequest {
  email: string;
  password: string;
};

interface IResponse {
  user: {
    email: string,
    name: string,
  };
  token: string;
}

class AuthenticateUser {
  constructor(private userRepositories: IUserRepository) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepositories.findByEmail(email);

    if (!user) {
      throw new AppError("Usuário ou senha incorreta");
    }

    console.log(password, user.password)

    const passwordMatch = await EncryptInfo.compare(password, user.password!);

    if (!passwordMatch) {
      throw new AppError("Usuário ou senha incorreta");
    }

    const token = Token.sing({}, {
      subject: user.email,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name!,
        email: user.email!
      }
    };

    return tokenReturn;
  }
};

export { AuthenticateUser };