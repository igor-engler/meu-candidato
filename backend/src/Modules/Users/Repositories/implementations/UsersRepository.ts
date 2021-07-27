import { User } from "../../Models/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";
import { db } from "../../../../db";

/**
 * Classe responsável por conter a implementação de todos os métodos do {@link IUserRepository}
 *
 * @property @private user - Array
 * @property @private INSTANCE - Objeto que contem a instância da classe {@link UserRepository}
 */
class UsersRepository implements IUserRepository {
    private user: User;

    private static INSTANCE: UsersRepository;

    /**
     * Verifica e retorna se existe uma instância do UserRepository. 
     *
     * @remarks
     * 
     * Caso não exista uma instância do UserRepository, então é criada uma nova.
     *
     * @returns returns a instance of UsersRepository
     */
    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    /**
     * Cria um novo usuário no banco de dados. 
     *
     * @param email
     * @param name
     * @param password
     *
     * @returns Void
     */
    create({ email, name, password }: ICreateUserDTO): void {
        const user = new User();
        const firestore = db.firestore().collection('users');

        Object.assign(user, {
            email,
            name,
            password
        });

        firestore.doc().set({
            email: user.email,
            name: user.name,
            password: user.password,
            list_favorites: []
        });
    };

    /**
     * Função que busca e retorna um email de usuário cadastrado.
     *
     * @remarks
     * Função utilizada para verificar se já existe um usuário com aquele email cadastrado no sistema. 
     *
     * @param email
     * @returns Retorna um objeto {@link User} que corresponde ao email passado.
     */
    async findByEmail(email: String): Promise<User> {
        const user = new User();
        const firestore = db.firestore().collection('users');

        const userDocumment = await firestore.where('email', '==', email).get();

        console.log(userDocumment.docs[0].data());

        return user;
    }
};

export { UsersRepository };