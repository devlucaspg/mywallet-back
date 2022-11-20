import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { signInBodyValidation } from "../middlewares/signInBodyValidation.middleware.js";
import { signUpBodyValidation } from "../middlewares/signUpBodyValidation.middleware.js";

const router = Router();

router.post("/sign-in", signInBodyValidation, signIn);
router.post("/sign-up", signUpBodyValidation, signUp);

export default router;