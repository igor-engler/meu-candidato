import { User } from "../Models/User";
import { IUserRepositories } from "./IUserRepositories";

class UsersRepository implements IUserRepositories {
    private user: User[];

    constructor() {
        this.user = [];
    }

    create({ email, name, password }): void {
        const user = new User();

        Object.assign(user, {
            email,
            name,
            password
        });

        this.user.push(user);
    };

    list(): User[] {
        return this.user;
    };

    findByEmail(email: String): User {
        const user = this.user.find(user => user.email === email);

        return user;
    }
};

export { UsersRepository };