import { AppError } from "../../../../Errors/AppError";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserRepositoryInMemory } from "../../Repositories/in-memory/UserRepositoryInMemory";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create User", () => {

    beforeAll(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("Should be able to create a new User", async () => {
        
        const user = {
            email: "teste@teste.com.br",
            name: "teste teste",
            password: "iasdgbfvisdgbfviwsdgbfviwu"
        };
        await createUserUseCase.execute({
            email: user.email,
            name: user.name,
            password: user.password
        });

        const userCreated = await userRepositoryInMemory.findByEmail(user.email);

        expect(userCreated).not.toBeUndefined();
    });
    
    it("Should not be able to create a new User with email exists", async () => {

        expect(async () => {
            const user = {
                email: "teste@teste.com.br",
                name: "teste teste",
                password: "iasdgbfvisdgbfviwsdgbfviwu"
            };
            await createUserUseCase.execute({
                    email: user.email,
                    name: user.name,
                    password: user.password
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should password be encrypted", async () => {
        const user = {
            email: "teste@teste.com.br",
            name: "teste teste",
            password: "iasdgbfvisdgbfviwsdgbfviwu"
        };
        const userCreated = await userRepositoryInMemory.findByEmail(user.email);

        expect(userCreated.password).not.toEqual(user.password);
    });
});