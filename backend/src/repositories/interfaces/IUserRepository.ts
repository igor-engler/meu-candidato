import { User } from "../../models/user";

interface ICreateUserDTO {
  email: string;
  name: string;
  password: string;
}

interface IUserRepository {
  create({ email, name, password }: ICreateUserDTO): void;
  findByEmail(email: string): Promise<User | undefined>;
}

export { IUserRepository, ICreateUserDTO };