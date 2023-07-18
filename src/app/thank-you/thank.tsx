"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '../store/store'


export default function Thank() {

const { cart } = useCartStore()





    return (
        <main className='flex flex-col w-[90%] md:gap-8 mx-auto rounded-lg bg-white p-4 md:w-[540px] md:pl-8 md:h-[581px] my-4 '>
            <div className='w-16 h-16 rounded-full bg-[#D87D4A] relative'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 24 24  " fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-auto h-auto  m-auto  ">
    <path d="M20 6L9 17l-5-5" />
  </svg>
            </div>
            <div className='w-full  flex flex-col gap-4 my-4 '>
                <p className='font-bold text-2xl leading-7 tracking-[0.86px] uppercase md:text-[32px] md:leading-9 md:tracking-[1.14px] md:w-[284px]'>thank you for your order</p>
                <p className='font-medium text-[15px] leading-[25px] opacity-50 '>You will receive an email confirmation shortly</p>
            </div>
            <div className='flex flex-col h-[232px] rounded-lg md:flex-row md:w-[444px] md:h-[140px]  '>
                <div className='md:w-[60%] '>
                    {cart.slice(0,1).map((product:any) => (
                        <div key={product.id} className='flex flex-col bg-[#F1F1F1]   py-2 rounded-lg md:rounded-none md:rounded-l-lg   '>
                            <div className='flex justify-around items-center border-b-2 pb-2 '>
                                <Image src={product.productImage} alt={product.name} width={300} height={300} className='w-7 h-8 ' />
                                <div className='flex flex-col w-[75px] '>
                                    <p className='font-bold text-[15px] leading-[25px] uppercase '>{product.name.split(" ").slice(0, 3).join(" ")} </p>
                                    <p className='text-base leading-[25px] font-bold  '>{product.price} </p>
                                </div>
                                <div><p className='font-bold text-[15px] leading-[25px] '>X{product.quantity} </p></div>

                            </div>
                            <div className='py-3  '>
                                <p className='font-bold text-[12px] leading-[16.39px] tracking-[-0.21px] opacity-50 text-center '>and {cart.length - 1 } other item(s)</p>
                            </div>
                            
                        </div>
                    ))  }
                </div>
                <div className='bg-black py-3 rounded-b-lg md:w-[198px] md:rounded-none md:rounded-r-lg '>
                    <p className='font-medium text-[15px] leading-[25px] opacity-50 uppercase text-white ml-6 '>grand total</p>
                    <p className='font-bold text-lg leading-[24.59px] text-white ml-6 '>${cart.grandTotal}</p>
                </div>
                
            </div>
            
                <Link href="/" className='h-[48px] w-full bg-[#D87D4A] flex items-center justify-center mx-auto md:w-[444px] md:m-0 md:mt-12  text-center text-white leading-[17.76px] tracking-[1px] text-[13px] font-bold uppercase hover:opacity-70' >back to home</Link>
            
        </main>
    )
}  