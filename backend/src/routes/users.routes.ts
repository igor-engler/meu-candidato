import { Router } from "express";
import { createUserController } from "../Modules/Users/UseCases/CreateUser";
import { listUserController } from "../Modules/Users/UseCases/ListUser";

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

UserRoutes.get('/', (request, response) => {
    return listUserController.handle(request, response);
});
export { UserRoutes };