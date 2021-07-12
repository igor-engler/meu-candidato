import { Router } from "express";
import { addUser } from "../Controller/userController";

const UserRoutes = Router();

UserRoutes.post('/', addUser);

export { UserRoutes };