import { AppError } from "../../src/errors/appError";
import { CreateUser } from "../../src/services/user/createUsers";
import { UserRepositoryInMemory, ICreateUserDTO} from "../repositories/userRepositoryInMemory";
import { EncryptInfo } from "../../src/frameworks/bcrypt/Ibcrypt";


let createUser: CreateUser;
let userRepositoryInMemory: UserRepositoryInMemory;
let user: ICreateUserDTO;

describe("Create User", () => {

    beforeAll(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUser = new CreateUser(userRepositoryInMemory);
        user = {
            email: "teste@teste.com.br",
            name: "teste teste",
            password: "123456789",
        };
    });

    it("Should be able to create a new User", async () => {

        await createUser.execute({
            email: user.email,
            name: user.name,
            password: user.password
        });

        const userCreated = await userRepositoryInMemory.findByEmail(user.email);

        expect(userCreated).not.toBeUndefined();
    });

    it("Should be not able to create a new User with exits email", async () => {
        expect(async () =>{
            await createUser.execute({
                email: user.email,
                name: user.name,
                password: user.password
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should password be encrypted", async () => {
        const userCreated = await userRepositoryInMemory.findByEmail(user.email);

        expect(userCreated).not.toEqual(user.password);
    });

    it("Should be unencrypted password must match the encrypted one", async () => {
        const userCreated = await userRepositoryInMemory.findByEmail(user.email);
        const passwordMatch = await EncryptInfo.compare(user.password, userCreated!.password!);

        expect(passwordMatch).toBeTruthy();
    });
});