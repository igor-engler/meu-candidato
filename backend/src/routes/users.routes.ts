import { Router } from "express";
import { createUserController } from "../Modules/Users/UseCases/CreateUser";

const UserRoutes = Router();

/**
 * Arquivo responsável por criar as rotas /users.
 *
 * @remarks
 * Rotas criadas criadas:
 *  - GET
 *  - POST
 */
UserRoutes.post('/', (request, response) => {
    return createUserController.handle(request, response);
});
export { UserRoutes };