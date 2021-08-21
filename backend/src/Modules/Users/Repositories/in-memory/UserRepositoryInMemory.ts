import { User } from "../../Models/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";


class UserRepositoryInMemory implements IUserRepository{

    users: User[] = [];

    create({ email, name, password }: ICreateUserDTO): void {
        const user = new User();

        Object.assign(user, {
            email,
            name,
            password
        });

        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);
        return user;
    }

};

export { UserRepositoryInMemory }