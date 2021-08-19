import { response, Router } from "express";
import authenticateUserController from '../Modules/Users/UseCases/AuthenticateUser';

const AuthenticateRoutes = Router();

AuthenticateRoutes.post("/sessions", (request, response) => {
    return authenticateUserController().handle(request, response);
});

export { AuthenticateRoutes };