import dayjs from "dayjs";
import { transactionsCollection } from "../database/db.js";

export async function newInput(req, res) {
  const { value, description, user } = res.locals.transactionAdjust; 
    
  try {
    const transaction = {
      value: value,
      description: description,
      user: user, 
      type: "input",
      date: dayjs().format("DD/MM")
    }
    
    await transactionsCollection.insertOne(transaction);

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function newOutput(req, res) {
  const { value, description, user } = res.locals.transactionAdjust;  

  try {
    const transaction = {
      value: value,
      description: description,
      user: user, 
      type: "output",
      date: dayjs().format("DD/MM")
    }

    await transactionsCollection.insertOne(transaction);

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getTransactions(req, res) {
  const user = res.locals.user
  try {
    const transactions = await transactionsCollection.find({user: user._id}).toArray();
    let balance;

    if (transactions.length > 0) {
      balance = transactions.reduce((acc, curr) => {
        //console.log(curr);
        if (curr.type === "input") {

          return acc + Number(curr.value);
        } else {

          return acc - Number(curr.value);
        }
      }, 0);

    }
    res.send({transactions, balance});
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
