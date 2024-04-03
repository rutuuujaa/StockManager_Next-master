import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

const query = request.nextUrl.searchParams.get("query") //important bro

const uri = "mongodb+srv://<username>:<password>@stockmanager.3xrgbxp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri); 
  try {

    const database = client.db('stock');
    const inventory = database.collection('inventory'); 
 
    const products = await inventory.aggregate([{
        $match: {
          $or: [
            { slug: { $regex: query, $options: "i" } },
           ]
        }
      }
    ]).toArray()
    return NextResponse.json({ success: true, products})
  } finally {
    await client.close();
  } 

}

 
    
    