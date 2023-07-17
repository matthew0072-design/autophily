import { auth } from "../config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { successMessage, errorMessage } from "@/app/utils/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";


export default async function SignUp(email: string, password: string, router: AppRouterInstance) {
  
   

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      successMessage("Signup Successful 🎉")
      router.push('/')
      
  } catch (e: any) {
    console.log(e)
    errorMessage("Error Occur ❌")

  }

  
}
