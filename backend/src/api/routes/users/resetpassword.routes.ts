import { Router } from "express";
import recoverPasswordController from "../../../services/password_recover";

const ResetPasswordRoutes = Router();

/**
 * Arquivo responsável por criar as rotas /session.
 *
 * @remarks
 * Rotas criadas criadas:
 *  - POST
 */
ResetPasswordRoutes.get('/', (request, response) => {
  return recoverPasswordController().handle(request, response);
});

export { ResetPasswordRoutes };