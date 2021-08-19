import { Router } from "express";
import { AuthenticateRoutes } from "./authenticate.routes";
import { UserRoutes } from "./users.routes";

const router = Router();

router.use("/users", UserRoutes);
router.use(AuthenticateRoutes);

export { router };