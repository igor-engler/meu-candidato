import { Router } from "express";
import { UserRoutes } from "./users/user.routes"
import { AuthenticateRoutes } from "./users/authenticate.routes";

const router = Router();

router.use('/users', UserRoutes);
router.use('/sessions', AuthenticateRoutes);

export default router;