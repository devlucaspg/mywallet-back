import dayjs from "dayjs";
import { transactionsCollection } from "../database/db.js";

export async function newInput(req, res) {
  const transaction = req.body;
  const transactionAjust = {
    ...transaction,
    value: Number(transaction.value.replace(",", ".")).toFixed(2),
  };

  try {
    await transactionsCollection.insertOne({
      ...transactionAjust,
      type: "input",
      date: dayjs().format("DD/MM"),
    });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function newOutput(req, res) {
  const transaction = req.body;
  const transactionAjust = {
    ...transaction,
    value: Number(transaction.value.replace(",", ".")).toFixed(2),
  };

  try {
    await transactionsCollection.insertOne({
      ...transactionAjust,
      type: "output",
      date: dayjs().format("DD/MM"),
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
    let balance;
    console.log(transactions);

    if (transactions.length > 0) {
      balance = transactions.reduce((acc, curr) => {
        console.log(curr);
        if (curr.type === "input") {
          console.log(Number(curr.value));
          return acc + Number(curr.value);
        } else {
          console.log(Number(curr.value));
          return acc - Number(curr.value);
        }
      }, 0);

      console.log(balance);
    }
    res.send({transactions, balance});
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
