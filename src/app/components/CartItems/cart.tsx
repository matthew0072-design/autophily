"use client"

import Link from 'next/link'
import CartItems from "./cartItems";
import { useCartStore } from "@/app/store/store";



export default function Cart ({ onClose }: any) {

        const { cart, removeAllItems } = useCartStore()
        
        let total = 0


if (cart) {

    total = cart.reduce((acc, item) => {
      const price = item.price.substring(1);   // Remove the dollar sign
      const removeCommaPrice = Number(price.replace(/,/g, ""));  //remove commas
  
      const quantity = item.quantity as number;
      return acc + removeCommaPrice * quantity;
    }, 0);
  }
         



    return (
        <>
        <main className=" w-[18rem] box-border right-[-2rem] absolute flex flex-col gap-4 rounded-[8px]  py-[16px] px-[12px] md:right-0 md:left-[11rem]  lg:left-[-18rem] mt-[4rem]   md:w-[21rem] text-black bg-[#ffffff] z-[10] ">
                

                <div className="flex justify-between">
                    <h3 className="text-lg font-bold tracking-[1.286px] uppercase"> Cart ({cart.length}) </h3>
                    <button onClick={removeAllItems} className="text-black opacity-50 lg:text-[#D87D4A] text-[15px] font-medium leading-[25px] underline lg:opacity-100 "> remove all </button>
                </div>
                <ul>
                    {cart?.map(product => (
                        <CartItems key={product.id} product={product}  />
                    ))}
                </ul>
                <div className="flex justify-between ">
                    <span className="text-[15px] font-medium leading-[25px] opacity-50 ">Total:</span>
                    <span className="text-lg font-bold uppercase leading-normal text-center ">${total.toFixed(2)} </span>
                    </div>
                <Link href='/checkout' onClick={onClose}  className='bg-[#D87D4A] text-white h-[48px] mt-5 mb-3 flex items-center justify-center uppercase tracking-[1px] font-bold text-[13px] text-center hover:bg-[#FBAF85] '>checkout</Link>
               
                
            </main>
 
        </>
    )
}