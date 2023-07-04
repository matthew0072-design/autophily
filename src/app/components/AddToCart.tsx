"use client"

import { useState, useEffect } from 'react'
import { Product, useCartStore } from '../store/store'



interface cartItemsProps {
    product: Product
    
}



export default function AddToCart({product}: cartItemsProps) {



const { addToCart, updateQuantity } = useCartStore()


const [localQuantity, setLocalQuantity] = useState<number>(product.quantity || 1);


  const handleDecrease = () => {
    updateQuantity(product.id, 'decrease');
    setLocalQuantity((prevQuantity:any) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    updateQuantity(product.id, 'increase');
    setLocalQuantity((prevQuantity:any) => prevQuantity + 1);
  };

  const handleAddToCart =  () => {

         addToCart(product);    
     
  };

  

    return (
        <main className="flex w-full justify-around items-center my-8   md:justify-start md:gap-4">
            
           <div className='flex w-[120px] h-[48px] bg-[#F1F1F1] justify-around items-center '>
                    <button onClick={handleDecrease}>-</button> 
                    <p className='font-bold'>{localQuantity}</p>
                    <button onClick={handleIncrease}>+</button>
                </div>

            <div className='w-[160px] h-[48px] bg-[#D87D4A] flex items-center justify-center hover:bg-[#FBAF85] '> 
             
             <button onClick={handleAddToCart} className='font-bold tracking-[1px] text-[13px]  text-center uppercase text-[#FFF]'>add to cart</button>
             
              </div> 
            
            
        </main>
    )
}