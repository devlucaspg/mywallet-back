import { transactionModel } from '../models/transaction.model.js';

export async function transactionBodyValidation(req, res, next) {
    const transaction = req.body;
    const user = res.locals.user
    const transactionAdjust = {...transaction, user: user._id, value: Number(transaction.value.replace(",", ".")).toFixed(2)};
    //console.log(transactionAdjust)
    const { error } = transactionModel.validate(transactionAdjust, { abortEarly: false });
    
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    res.locals.transactionAdjust = transactionAdjust;
    res.locals.user = user;
    
    next();
}