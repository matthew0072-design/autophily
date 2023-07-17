import { auth } from "../config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { successMessage, errorMessage } from "@/app/utils/utils";



export default async function signIn(email: string, password: string, router: AppRouterInstance){
  
  try {
      await signInWithEmailAndPassword(auth, email, password);
      successMessage("Login Successful 🎉")
      router.push('/')
      
  } catch (e: any) {
    console.log(e)
    errorMessage("Invalid Email/Password ❌")

  }

  
}
