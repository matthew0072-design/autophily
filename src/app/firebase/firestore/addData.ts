import { db } from "../config";
import {collection, addDoc } from "firebase/firestore";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import {  errorMessage } from "@/app/utils/utils";



export default async function addData(data:any, router: AppRouterInstance){
  
  
  
  try {
    
     await addDoc(collection(db, "products"), data);
    router.push('/thank-you')
    
      
  } catch (error) {
    errorMessage("Unable to Added Product ❌")
        
    
  }

  

}
