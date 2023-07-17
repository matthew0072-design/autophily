import { db } from "../config";
import {collection, addDoc } from "firebase/firestore";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { successMessage, errorMessage } from "@/app/utils/utils";

export default async function addData(data:any, router: AppRouterInstance){
  
  
  try {
    
     await addDoc(collection(db, "products"), data);
    successMessage("Product Added Successfully 🎉")
    router.push('/')
      
  } catch (error) {
    errorMessage("Unable to Added Product ❌")
        
    
  }

  

}
