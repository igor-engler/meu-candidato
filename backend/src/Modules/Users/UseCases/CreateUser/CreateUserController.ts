import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

/**
 * Classe responsável por receber os dados para criar um novo usuário. E retornar a resposta.
 *
 * @property @private {@link CreateUserUseCase}
 *
 * @method handle
 *
 * @exports CreateUserController
 */
class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    /**
     * Função responsável por receber a requisição e retornar a resposta dela. 
     *
     * @param request - Requeste
     * @param response - Response
     * @returns Retorna o status da operação.
     */
    handle(request: Request, response: Response) {

        const { email, name, password } = request.body;

        this.createUserUseCase.execute({ email, name, password });

        return response.status(201).send();
    };
};

export { CreateUserController };