import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB successfully connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("projeto14-mywallet");
export const usersCollection = db.collection("users");
export const transactionsCollection = db.collection("transactions");
export const sessionsCollection = db.collection("sessions");