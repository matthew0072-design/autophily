"use client"

import { useForm } from 'react-hook-form'



interface IformInput {
    
    name: string,
    email: string,
    phoneNumber: number,
    address: string,
    zip: number,
    city: string,
    country: string
    eNumber: number,
    ePin: number

}


enum paymentType {
    eMoney = "e Money",
    cashOnDelivery = "cash on delivery"
}



export default function CheckoutForm() {

    const { register, handleSubmit, formState: { errors },} = useForm()

const onHandleSubmit = (data: any) => {
    console.log(data)
}

    return (

            <main className=' '>
                <h3 className='text-[28px] font-bold tracking-[1px] uppercase '>checkout</h3>
                <form onSubmit={handleSubmit(onHandleSubmit)} className='flex flex-col  '>
                    
                    <div className='flex flex-col'>
                        <h3 className='text-[#D87D4A] text-[13px] font-bold leading-[25px] uppercase  '>billing details</h3>
                        <div>
                            <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col '>Name 
                                <input placeholder='Alexei Ward'  {...register('name')} className='w-[280px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg ' />
                            </label>
                            <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col '>Email Address 
                                <input type='email' placeholder="alexei@mail.com" {...register('email')} className='w-[280px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg '/>
                            </label>
                            <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col '>Phone Number
                                <input type="tel"  placeholder="+1202-555-0136"   {...register('phoneNumber')} className='w-[280px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg '/>
                            </label>
                        </div>
                    </div>

                    <div>
                        <h3 className=' '>shipping info</h3>
                        <div>
                        <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col'>Address 
                            <input  placeholder="1137 William Avenue"  {...register('address')} className='w-[280px] border-2 border-[#CFCFCF] bg-white p-1.5 rounded-lg ' />
                         </label>
                         <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col'>ZIP Code
                            <input type='tel' placeholder="10001" {...register('zip')} className='w-[280px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg'/>
                        </label>
                        <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col'>City
                            <input   placeholder="New York"   {...register('city')} className='w-[280px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg' />
                        </label>
                        <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col'>Country
                            <input placeholder="United States" {...register('country')} className='w-[280px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg '/>
                        </label>
                        </div>
                    </div>

                    <div>
                        <h3> payment details </h3>
                        <div>
                            <p>payment method</p>
                            
                            <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col'>Payment Method
                                <input type="radio" {...register('payment-method')} value="e-Money" className='w-[280px] border-2 border-[#CFCFCF] bg-white p-1.5 rounded-lg '/>
                                <input type="radio" {...register('payment-method')} value="cash on delivery" className='w-[280px] border-2 border-[#CFCFCF] bg-white p-1.5 rounded-lg '/>  
                            </label>
                        </div>
                        <div>
                            <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col'> e-Money Number
                                <input type="tel" {...register('eNumber')} placeholder="238521993" className='w-[280px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg '/>
                            </label> 
                            <label className='text-[12px] font-bold leading-[normal] tracking-[-0.214px] flex flex-col'>e-Money Pin
                                <input type="tel" {...register('ePin')} placeholder="6891" className='w-[280px] border border-[#CFCFCF] bg-white p-1.5 rounded-lg ' />
                            </label>
                        </div>
                    </div>
                    <div>
                        <p>summary</p>
                        <div>

                        </div>
                        <div>
                            <p>total</p>
                            <p>price</p>
                        </div>
                        <div>
                            <p>shipping</p>
                            <p>price</p>
                        </div>
                        <div>
                            <p>vat(included)</p>
                            <p>price</p>
                        </div>
                        <div>
                            <p>grand total</p>
                            <p>price</p>
                        </div>
                        <button className='bg-[#D87D4A] text-white w-[279px] text-center text-[13px] font-bold uppercase h-[48px] '>continue & pay</button>
                    </div>
                </form>

            </main>

    )
}