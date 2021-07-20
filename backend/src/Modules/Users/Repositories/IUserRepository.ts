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
 * @method findByEmail
 * @method list
 * @method create
 */
interface IUserRepository {
    findByEmail(email: string): User;
    list(): User[];
    create({ email, name, password }: ICreateUserDTO): void;
}

export { IUserRepository, ICreateUserDTO };