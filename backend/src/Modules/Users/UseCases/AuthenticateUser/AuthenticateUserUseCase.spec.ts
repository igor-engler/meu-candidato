import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { UserRepositoryInMemory } from "../../Repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { ICreateUserDTO } from "../../Repositories/IUserRepository";
import { AppError } from "../../../../Errors/AppError";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {

    beforeAll(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new  AuthenticateUserUseCase(userRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("Should be authenticated an User with correct email and password", async () => {
        const user: ICreateUserDTO = {
            email: "teste@teste.com.br",
            name: "teste",
            password: "123456789"
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
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
            await authenticateUserUseCase.execute({
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
            await authenticateUserUseCase.execute({
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
            await authenticateUserUseCase.execute({
                email: user.email,
                password: user.password
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});