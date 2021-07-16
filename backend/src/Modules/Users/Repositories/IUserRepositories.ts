import { User } from "../Models/User";

//DTO -> Data Transfer Object => Serve para transferir informações entre camadas
interface ICreateUserDTO {
    email: string;
    name: string;
    password: string;
}

interface IUserRepositories {
    findByEmail(email: string): User;
    list(): User[];
    create({ email, name, password }: ICreateUserDTO): void;
}

export { IUserRepositories, ICreateUserDTO };