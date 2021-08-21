import { User } from "../../models/user";
import { ICreateUserDTO, IUserRepository } from "../interfaces/IUserRepository";
import { Database } from "../../frameworks/firebase/Ifirebase";


class UserRepository implements IUserRepository{
    
    private static INSTANCE: UserRepository;
    private static database: Database;
    
    public static getInstance(): UserRepository{
        if(!UserRepository.INSTANCE){
            UserRepository.INSTANCE = new UserRepository();
            UserRepository.database = new Database();
        }

        return UserRepository.INSTANCE;
    }

    create({ email, name, password }: ICreateUserDTO): void {
        const user = new User();

        Object.assign(user, {
            email,
            name,
            password,
            list_favorites: []
        });

        UserRepository.database.storeData('users', user);
        
    };

    async findByEmail(email: string): Promise<User> {
        const userFound = await UserRepository.database.findData('users', 'email', email);

        if(!userFound){
            return undefined;
        }
        
        const user = new User();
        Object.assign(user, userFound);

        return user;
    }

};

export { UserRepository };