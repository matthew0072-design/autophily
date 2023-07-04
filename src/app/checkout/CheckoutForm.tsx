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

            <main>
                <h3>checkout</h3>
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    
                    <div>
                        <h3>billing details</h3>
                        <div>
                            <label>Name</label>
                            <input defaultValue="Alexei Ward"  {...register('name')} />
                            <label>Email Address</label>
                            <input type='email' defaultValue="alexei@mail.com" {...register('email')} />
                            <label>Phone Number</label>
                            <input type="tel"  defaultValue="+1202-555-0136"   {...register('phoneNumber')} />
                        </div>
                    </div>

                    <div>
                        <h3>shipping info</h3>
                        <div>
                        <label>Address</label>
                         <input  defaultValue="1137 William Avenue"  {...register('address')} />
                         <label>ZIP Code</label>
                        <input type='tel' defaultValue="alexei@mail.com" {...register('zip')} />
                        <label>City</label>
                            <input   defaultValue="+1202-555-0136"   {...register('city')} />
                            <label>Country</label>
                            <input defaultValue="United States" {...register('country')} />
                        </div>
                    </div>

                    <div>
                        <h3> payment details </h3>
                        <div>
                            <p>payment method</p>
                            
                            <label>Payment Method</label>
                            <input type="radio" {...register('payment-method')} value="e-Money" />
                            
                            <input type="radio" {...register('payment-method')} value="cash on delivery" />  
                        </div>
                        <div>
                            <label htmlFor='e-money transfer'>
                                <input type="tel" {...register('eNumber')} defaultValue="238521993" />
                            </label>
                            <label htmlFor='e-money pin'>
                                <input type="tel" {...register('ePin')} defaultValue="6891" />
                            </label>
                        </div>
                    </div>


                </form>

            </main>

    )
}