import { transactionModel } from '../models/transaction.model.js';

export async function transactionBodyValidation(req, res, next) {
    const transaction = req.body;
    const { error } = transactionModel.validate(transaction, { abortEarly: false });
    
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    next();
}