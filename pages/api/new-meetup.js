import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://first-user-1:fMhZoIB6IXnOvay1@cluster0.ovdefz7.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetUpsCollection = db.collection("meetups");

    const result = await meetUpsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "asdfsadf" });
  }
};

export default handler;
