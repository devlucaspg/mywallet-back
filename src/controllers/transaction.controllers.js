import { transactionsCollection } from "../database/db";

export async function newIn(req, res) {
    const transaction = req.body;

    try {

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};