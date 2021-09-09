import { Router } from "express";
import createUserController from "../../../services/user"

const UserRoutes = Router();

/**
 * Arquivo responsável por criar as rotas /users.
 *
 * @remarks
 * Rotas criadas criadas:
 *  - POST
 */
UserRoutes.post('/', (request, response) => {
  return createUserController().handle(request, response);
});

export { UserRoutes };