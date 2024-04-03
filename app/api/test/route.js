import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

  const uri = "mongodb+srv://<username>:<password>@stockmanager.3xrgbxp.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    const database = client.db('stock');
    const movies = database.collection('inventory');

    const movie = await movies.find().toArray();

    return NextResponse.json({ "a": 35, movie });

  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
