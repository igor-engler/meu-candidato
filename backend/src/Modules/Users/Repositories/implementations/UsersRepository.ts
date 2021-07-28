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
    private firestore = db.firestore().collection('users');

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

        Object.assign(user, {
            email,
            name,
            password
        });

        this.firestore.doc().set({
            email: user.email,
            name: user.name,
            password: user.password,
            list_favorites: []
        });
    };

    /**
     * Função que verifica se um email está cadastrado no sistema.
     *
     * @remarks
     * Função utilizada para verificar se já existe um usuário com aquele email cadastrado no sistema. 
     *
     * @param email
     * @returns Retorna um Boolean, dizendo se existe um usuário com aquele email.
     */
    async findByEmail(email: string): Promise<boolean> {
        const userDocument = await this.firestore.where('email', '==', email).get();

        //Se a query está diferente de vazia,e então existe usuário cadastrado.
        if (!userDocument.empty) {
            return true;
        }

        return false;
    }
};

export { UsersRepository };