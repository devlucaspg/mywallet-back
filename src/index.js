import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";
import joi from "joi";
import { MongoClient } from "mongodb";
import { v4 as uuid } from "uuid";

dotenv.config();

const app = express();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

app.use(cors());
app.use(express.json());

try {
  await mongoClient.connect();
  console.log("MongoDB Conected!");
  db = mongoClient.db("projeto14-mywallet");
} catch (err) {
  console.log(err);
}







app.listen(process.env.PORT, () => {
  console.log(`Server is running in port: ${process.env.PORT}`);
});