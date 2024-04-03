import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

  const uri = "mongodb+srv://<username>:<password>@stockmanager.3xrgbxp.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    const database = client.db('stock');
    const inventory = database.collection('inventory');

    const query = {};
    const products = await inventory.find(query).toArray();

    console.log("Products Fetched Sucessfully.")
    return NextResponse.json({ success : true, products });

  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export async function POST(request) {

  let body = await request.json();
  console.log(body);

  const uri = "mongodb+srv://mongodb:zoIeYMvZRi0d4tlc@stockmanager.3xrgbxp.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    const database = client.db('stock');
    const inventory = database.collection('inventory');

    const product = await inventory.insertOne(body);

    console.log("Products added successfully.")
    return NextResponse.json({ product, ok: true});

  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
