import { Router } from "express";
import authenticateUserController from "../../../services/auth";

const AuthenticateRoutes = Router();

/**
 * Arquivo responsável por criar as rotas /session.
 *
 * @remarks
 * Rotas criadas criadas:
 *  - POST
 */
AuthenticateRoutes.post('/', (request, response) => {
    return authenticateUserController().handle(request, response);
});

export { AuthenticateRoutes };