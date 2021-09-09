import { User } from "../../src/models/user";
import { EncryptInfo } from "../../src/frameworks/bcrypt/Ibcrypt";
import { ICreateUserDTO, IUserRepository } from "../../src/repositories/interfaces/IUserRepository";

class UserRepositoryInMemory implements IUserRepository {

  users: User[] = [];

  async create({ email, name, password }: ICreateUserDTO): Promise<void> {
    const user = new User();

    const passwordEncrypted = await EncryptInfo.hash(password, 8);

    Object.assign(user, {
      email,
      name,
      password: passwordEncrypted
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);
    return user;
  }
};

export { UserRepositoryInMemory, ICreateUserDTO };