import { transactionModel } from '../models/transaction.model.js';

export async function transactionBodyValidation(req, res, next) {
    const transaction = req.body;
    const transactionAjust = {...transaction, value: Number(transaction.value.replace(",", ".")).toFixed(2)};
    console.log(transactionAjust)
    const { error } = transactionModel.validate(transactionAjust, { abortEarly: false });
    
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    next();
}