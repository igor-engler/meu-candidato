import { User } from "../Models/User";

/**
 * Interface Usada para transferir informações entre camadas.
 *
 * @property email - String que contem o email do usuário.
 * @property name - String que contem o nome completo do usuário.
 * @property password - String que contem a senha do usuário.
 */
interface ICreateUserDTO {
    email: string;
    name: string;
    password: string;
}

/**
 * Interface que contem o contrato dos métodos da classe {@link UsersRepository}
 *
 * @method create
 * @method findByEmail
 */
interface IUserRepository {
    create({ email, name, password }: ICreateUserDTO): void;
    findByEmail(email: string): Promise<User>;
}

export { IUserRepository, ICreateUserDTO };