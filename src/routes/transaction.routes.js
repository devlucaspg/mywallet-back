import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { newInput, newOutput, getTransactions } from "../controllers/transaction.controllers.js";
import { transactionBodyValidation } from "../middlewares/transactionBodyValidation.middleware.js";

const router = Router();

router.use(authValidation);

router.post("/input", transactionBodyValidation, newInput);
router.post("/output", transactionBodyValidation, newOutput);
router.get("/transactions", getTransactions);

export default router;
