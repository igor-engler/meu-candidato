import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

/**
 * Classe responsável por receber os dados, e retornar a lista de usuários correspondentes.
 *
 * @property @private listUserCase - {@link ListUserUseCase}
 *
 * @method handle
 *
 * @exports ListUserController
 */
class ListUserController {
    constructor(private listUserCase: ListUserUseCase) { }

    /**
     * Função que recebe os os dados do Request, e retorna a resposta da requisição. 
     *
     * @param request - Request
     * @param response - Response
     *
     * @returns Retorna uma lista contendo todos os usuários.
     */
    handle(request: Request, response: Response): Response {
        const all = this.listUserCase.execute();

        return response.json(all);
    };
};

export { ListUserController };