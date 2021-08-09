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
    async handle(request: Request, response: Response): Promise<Response> {

        const { email, name, password } = request.body;

        try {
            await this.createUserUseCase.execute({ email, name, password });
        } catch (error) {
            return response.status(500).json({ "Error": "Erro: Usuário já cadastrado" });
        }

        return response.status(201).json({ "Sucess": "Usuário cadastrado com sucesso" });
    };
};

export { CreateUserController };