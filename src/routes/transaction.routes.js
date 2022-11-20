import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.use(authValidation);

router.post("/input", );
router.post("/output", );
router.get("/transactions", );

export default router;