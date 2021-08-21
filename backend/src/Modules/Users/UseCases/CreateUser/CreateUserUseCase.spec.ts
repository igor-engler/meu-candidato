import { AppError } from "../../../../Errors/AppError";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserRepositoryInMemory } from "../../Repositories/in-memory/UserRepositoryInMemory";
import { compare } from "bcrypt";
import { ICreateUserDTO } from "../../Repositories/IUserRepository";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create User", () => {

    beforeAll(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("Should be able to create a new User", async () => {
        
        const user: ICreateUserDTO = {
            email: "teste@teste.com.br",
            name: "teste teste",
            password: "iasdgbfvisdgbfviwsdgbfviwu"
        };
        await createUserUseCase.execute(user);

        const userCreated = await userRepositoryInMemory.findByEmail(user.email);

        expect(userCreated).not.toBeUndefined();
    });
    
    it("Should not be able to create a new User with email exists", async () => {

        await expect(async () => {
            const user: ICreateUserDTO = {
                email: "teste@teste.com.br",
                name: "teste teste",
                password: "iasdgbfvisdgbfviwsdgbfviwu"
            };
            await createUserUseCase.execute(user);
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should list of deputies be Undefined", async () => {
        const user = {
            email: "teste@teste.com.br",
            name: "teste teste",
            password: "iasdgbfvisdgbfviwsdgbfviwu"
        };

        const userCreated = await userRepositoryInMemory.findByEmail(user.email);

        expect(userCreated.list_favorites).toBeUndefined();
    });

    it("Should password be encrypted", async () => {
        const user: ICreateUserDTO = {
            email: "teste@teste.com.br",
            name: "teste teste",
            password: "iasdgbfvisdgbfviwsdgbfviwu"
        };
        const userCreated = await userRepositoryInMemory.findByEmail(user.email);

        expect(userCreated.password).not.toEqual(user.password);
    });

    it("Should be unencrypted password must match the encrypted one", async () => {
        const user: ICreateUserDTO = {
            email: "teste@teste.com.br",
            name: "teste teste",
            password: "iasdgbfvisdgbfviwsdgbfviwu"
        };

        const userCreated = await userRepositoryInMemory.findByEmail(user.email);

        const comparedPassword = await compare(user.password, userCreated.password);

        expect(comparedPassword).toBeTruthy();
    });
});