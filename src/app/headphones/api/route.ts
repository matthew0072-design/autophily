import path from 'path';
import { promises as fsPromises } from 'fs';
import { NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'public/productList.json');

export async function GET(request: Request) {

  try {
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData.toString());

    return NextResponse.json(objectData)

} catch (error) {
    console.error('Error reading JSON file:', error);
    
  }
}
