import { NextResponse } from 'next/server'
import path from 'path';
import { promises as fsPromises } from 'fs';

const dataFilePath = path.join(process.cwd(), 'public/productList.json');


export async function GET(request: Request) {
    
    // const id = context.params.id
    // console.log(id)

    try {
    
        if( !request || !request.headers) {
            throw new Error("Invalid request object!!! ")
        }

        const { searchParams } = new URL(request.url)
        
        const id = searchParams.get('id')

        const jsonData = await fsPromises.readFile(dataFilePath, 'utf-8');
        // const productList = JSON.parse(jsonData.toString());

        const productList = JSON.parse(jsonData)

        const objectData = productList.find((product:any) => product.id === Number(id))

        if(objectData) {
        
            return NextResponse.json(objectData)
        } else {
            throw new Error(`product with id ${id} not found `)
        }
      
        
    } 

 catch(error) {
    
    console.error(error)
    return NextResponse.json({message: error}, { status: 404})
    
 }
  
 
}