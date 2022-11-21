import dayjs from "dayjs";
import { transactionsCollection } from "../database/db.js";

export async function newInput(req, res) {
  const transaction = req.body;

  try {
    await transactionsCollection.insertOne({
      ...transaction,
      type: "input",
      day: dayjs().format("DD/MM/YYYY HH:mm:ss"),
    });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function newOutput(req, res) {
  const transaction = req.body;

  try {
    await transactionsCollection.insertOne({
      ...transaction,
      type: "output",
      day: dayjs().format("DD/MM/YYYY"),
    });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getTransactions(req, res) {
  try {
    const transactions = await transactionsCollection.find().toArray();
    console.log(transactions);
    res.send(transactions);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
