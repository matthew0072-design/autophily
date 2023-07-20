"use client"

import { useForm } from 'react-hook-form'
import { useCartStore } from '../store/store'
import Image from 'next/image'
import addData from '../firebase/firestore/addData'
import { useRouter } from 'next/navigation'
import Link from 'next/link'



interface IFormInput {
    
    name: string,
    email: string,
    phoneNumber: number,
    address: string,
    zip: number,
    city: string,
    country: string
    eNumber: number,
    ePin: number,
    paymentType: paymentType,
     products: { name: string; quantity: number }[]
     grandTotal: number
}


enum paymentType {
    eMoney = "e Money",
    cashOnDelivery = "cash on delivery"
}



export default function CheckoutForm() {

    const { cart, calculateGrandTotal } = useCartStore()
    const router = useRouter()

    const { register, handleSubmit, formState: { errors },} = useForm<IFormInput>()




const onHandleSubmit =  (data: IFormInput) => {

    const productItems: {name: string; quantity: number}[] = []  
    
    cart.forEach((product:any) => {

        const productItem ={
            
             name: product.name,
            quantity: product.quantity
        }
        productItems.push(productItem)
    })

    data.products = productItems
    data.grandTotal = grandTotal
    
    
        addData(data, router)

        
        
}



let total = cart.reduce((acc, item) => {
    const price = item.price.substring(1);   // Remove the dollar sign
    const removeCommaPrice = Number(price.replace(/,/g, ""));  //remove commas

    const quantity = item.quantity as number;
    return acc + removeCommaPrice * quantity;
  }, 0);



let grandTotal = ((total  * 0.05) + total + 10)



    return (

            <main className='w-full relative flex flex-col  bg-[#CFCFCF] pb-8 '>
                <Link href="/" className=' px-4 lg:px-[7rem] md:px-[2rem] py-8 hover:opacity-70 font-medium text-[15px] leading-[25px]  ' >Go Home </Link>
                <form onSubmit={handleSubmit(onHandleSubmit)} className=' md:w-[90%]  flex flex-col  items-center mx-2 md:mx-auto gap-4 lg:flex-row lg:items-start lg:justify-around '>
                    
                    <div className=' lg:border lg:w-[730px] bg-white rounded-lg lg:pb-8 pb-4 '>
                        <h3 className='text-[28px] font-bold tracking-[1px] uppercase w-[90%] px-8 md:text-[32px] md:tracking-[1.143px] leading-9 lg:pt-8 '>checkout</h3>
                        <div className='flex flex-col gap-4 mx-4 '>
                            <h3 className='text-[#D87D4A] text-[13px] font-bold leading-[25px] uppercase tracking-[0.929px] lg:p-8  '>billing details</h3>
                            <div className='flex  flex-col gap-4 md:flex-row md:flex-wrap md:gap-4 lg:mx-5 lg:gap-4'>
                                <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col gap-2  '>Name 
                                    <input placeholder='Alexei Ward' required {...register('name')} className='w-[280px] h-[56px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg md:w-[315px] focus:outline-none focus:border-2 focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10 ' />
                                </label>
                                <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col gap-2'>Email Address 
                                    <input type='email' placeholder="alexei@mail.com" required {...register('email')} className='w-[280px] h-[56px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg md:w-[315px] focus:border-2 focus:outline-none focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10 '/>
                                </label>
                                <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col gap-2'>Phone Number
                                    <input type="tel"  placeholder="+1202-555-0136" required  {...register('phoneNumber')} className='w-[280px] h-[56px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg md:w-[315px] focus:border-2  focus:outline-none focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10 '/>
                                </label>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 w-full md:w-auto relative mx-4  '>
                            <h3 className='text-[13px] text-[#D87D4A] font-bold leading-[25px] tracking-[0.929px] uppercase lg:p-8 '>shipping info</h3>
                            <div className='flex flex-col gap-4 md:flex-row md:flex-wrap lg:mx-4 '>
                            <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col gap-2 md:w-full   '>Address 
                                <input  placeholder="1137 William Avenue" required {...register('address')} className='md:w-full w-[280px] h-[56px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg focus:border-2 focus:outline-none focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10 ' />
                            </label>
                            <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col gap-2'>ZIP Code
                                <input type='tel' placeholder="10001" required {...register('zip')} className='w-[280px] h-[56px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg md:w-[315px] focus:border-2 focus:outline-none focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10 '/>
                            </label>
                            <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col gap-2'>City
                                <input   placeholder="New York" required  {...register('city')} className='w-[280px] h-[56px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg md:w-[315px] focus:border-2 focus:outline-none focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10 ' />
                            </label>
                            <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col gap-2'>Country
                                <input placeholder="United States" required {...register('country')} className='w-[280px] h-[56px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg md:w-[315px] focus:border-2 focus:outline-none focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10 '/>
                            </label>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 w-full relative mx-4 md:w-auto '>
                            <h3 className='text-[13px] text-[#D87D4A] font-bold leading-[25px] tracking-[0.929px] uppercase lg:p-8'> payment details </h3>
                            <div className='flex flex-col gap-4 md:flex-row md:justify-between  md:w-full   '>
                                <p className='capitalize font-bold tracking-[-0.214px] text-[12px] lg:mx-8 '>payment method</p>
                                
                                <div className="flex flex-col gap-4 w-auto lg:mx-8   ">
                                    <label className='text-[12px] rounded-lg font-bold leading-[normal] tracking-[-0.214px] flex  gap-2 border-2  w-[280px] h-[56px] items-center md:w-[315px]  '>
                                        <input type="radio" required {...register('paymentType')} value="e-Money" className='hover:cursor-pointer checked:text-[#D87D4A] w-[20px] h-[20px] ml-8  border-[#CFCFCF] bg-white p-1.5 rounded-lg focus:outline-none focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10  ring-[#D87D4A] ring-offset-2 '/>  
                                        <span className='font-bold text-sm  tracking-[-0.25px] '>E - Money</span>
                                    </label>
                                    <label className='text-[12px] rounded-lg font-bold leading-[normal] tracking-[-0.214px] flex  gap-2 border-2 w-[280px] h-[56px] items-center md:w-[315px]'>
                                    <input type="radio" required {...register('paymentType')} value="cash on delivery" className='hover:cursor-pointer w-[20px] h-[20px] ml-8 border-2 border-[#CFCFCF] bg-white p-1.5 rounded-lg focus:outline-none focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10  ring-[#D87D4A] ring-offset-2'/>
                                    <span className='font-bold text-sm  tracking-[-0.25px] '>Cash on Delivery</span>
                                    </label>
                                </div>
                                
                            </div>
                            <div className='flex flex-col gap-4 md:flex-row w-full relative lg:mx-8'>
                                <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col gap-2 md:w-[315px] '> e-Money Number
                                    <input type="tel" required {...register('eNumber')} placeholder="238521993" className='w-[280px] h-[56px] md:w-[315px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg focus:border-2 focus:outline-none focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10 '/>
                                </label> 
                                <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col gap-2 md:w-[315px]'>e-Money Pin
                                    <input type="tel" required {...register('ePin')} placeholder="6891" className='w-[280px] h-[56px] border md:w-[315px] border-[#CFCFCF] bg-white p-1.5 rounded-lg focus:border-2 focus:outline-none focus:ring-[#D87D4A] focus:border-[#D87D4A] focus:z-10' />
                                </label>
                            </div>
                        </div>


                    </div>

                    

                    <div className='w-full mx-4 px-2 pb-4 flex flex-col  gap-4  lg:w-[350px] bg-white rounded-lg lg:p-6  '>
                        <p className='text-lg font-bold tracking-[1.286px] uppercase leading-[normal] '>summary</p>
                        <div className='flex flex-col gap-4' >
                        {cart?.map((product: any) => (
                            <div key={product.id} className='flex justify-between items-center'>
                                <div className='bg-[#F1F1F1] rounded-[8px] w-[64px] h-[64px] flex items-center justify-center  '>
                                    <Image src={product?.productImage} width={300} height={300} alt='product Image' className='w-[36.19px] h-[40px]  ' />
                                </div>
                                <div>
                                    <p className='text-black text-[15px] font-bold leading-[25px] text-center '>{product?.name} </p>
                                    <p className='text-black text-base font-bold leading-[25px] opacity-50 text-center '>{product?.price} </p>
                                </div>
                                
                                <p className='font-bold leading-normal text-[15px] text-center opacity-50  ' > X {Number(product?.quantity)} </p>
                            </div>
                        ))}
                        </div>
                        <div className='flex justify-between  '>
                            <p className='text-[15px] font-medium leading-[25px] opacity-50 uppercase '>total</p>
                            <p className='text-lg font-bold  '>${total}</p>
                        </div>
                        <div className='flex justify-between '>
                            <p className='text-[15px] font-medium leading-[25px] opacity-50 uppercase '>shipping</p>
                            <p className='text-lg font-bold  '>$10</p>
                        </div>
                        <div className='flex justify-between '>
                            <p className='text-[15px] font-medium leading-[25px] opacity-50 uppercase '>vat(included)</p>
                            <p className='text-lg font-bold  '>5%</p>
                        </div>
                        <div className='flex justify-between '>
                            <p className='text-[15px] font-medium leading-[25px] opacity-50 uppercase   '>grand total</p>
                            <p className='text-lg font-bold text-[#D87D4A]   '>${grandTotal.toFixed(2)}</p>
                        </div>
                        <button onClick={() => calculateGrandTotal(grandTotal)}  className='bg-[#D87D4A] hover:opacity-80 text-white w-full md:w-full text-center text-[13px] font-bold uppercase h-[48px] md:tracking-[1px] '>continue & pay</button>
                    </div>
                </form>

            </main>

    )
}