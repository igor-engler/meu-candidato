import { Router } from "express";
import { UserRoutes } from "./users/user.routes"
import { AuthenticateRoutes } from "./users/authenticate.routes";
import { ResetPasswordRoutes } from "./users/resetpassword.routes";

const router = Router();

router.use('/users', UserRoutes);
router.use('/sessions', AuthenticateRoutes);
router.use('/reset-password', ResetPasswordRoutes);

export default router;