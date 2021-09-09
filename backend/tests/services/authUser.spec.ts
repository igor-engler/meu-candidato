import { AuthenticateUser } from "../../src/services/auth/authenticateUser";
import { UserRepositoryInMemory, ICreateUserDTO } from "../repositories/userRepositoryInMemory";
import { CreateUser } from "../../src/services/user/createUsers";
import { AppError } from "../../src/errors/appError";

let authenticateUser: AuthenticateUser;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUser: CreateUser;
let user: ICreateUserDTO;

describe("Authenticate User", () => {

  beforeAll(async () => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUser = new AuthenticateUser(userRepositoryInMemory);
    createUser = new CreateUser(userRepositoryInMemory);

    user = {
      email: "teste@teste.com.br",
      name: "teste",
      password: "123456789"
    };

    await createUser.execute(user);
  });

  it("Should be authenticated an User with correct email and password", async () => {
    const result = await authenticateUser.execute({
      email: user.email,
      password: user.password
    });
    expect(result).toHaveProperty("token");
  });

  it("Should not be able to authenticate an User with wrong password", async () => {
    const user: ICreateUserDTO = {
      email: "teste@teste.com.br",
      name: "teste",
      password: "wrongpassword"
    };

    // The correct password should be "123456789"
    await expect(async () => {
      await authenticateUser.execute({
        email: user.email,
        password: user.password
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate an User with wrong email", async () => {
    const user: ICreateUserDTO = {
      email: "wrongemail@teste.com.br",
      name: "teste",
      password: "123456789"
    };

    // The correct email should be "teste@teste.com.br"
    await expect(async () => {
      await authenticateUser.execute({
        email: user.email,
        password: user.password
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate an User with worng email and password", async () => {
    const user: ICreateUserDTO = {
      email: "wrongemail@teste.com.br",
      name: "teste",
      password: "wrongpass"
    };

    // The correct email should be "teste@teste.com.br"
    // The correct password should be "123456789"
    await expect(async () => {
      await authenticateUser.execute({
        email: user.email,
        password: user.password
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});