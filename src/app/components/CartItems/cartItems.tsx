'use client'
import Image from 'next/image'
import {Product, useCartStore } from '../../store/store'



interface cartItemsProps {
    product: Product
}


export default function CartItems({ product }: cartItemsProps ) {

    const {  updateQuantity } = useCartStore()
    

    return (
        <li>
            
            <div className='flex h-[64px] relative items-center mb-4 mt-4 justify-around '>
                <div className='bg-[#F1F1F1] rounded-[8px] w-[64px] h-[64px] flex items-center justify-center  '>
                    <Image src={product?.productImage} width={300} height={300} alt='product Image' className='w-[36.19px] h-[40px]  ' />
                </div>
                <div className=''>
                    <p className='text-black text-[15px] font-bold leading-[25px] text-center '>{product?.name} </p>
                    <p className='text-black text-base font-bold leading-[25px] opacity-50 text-center '>{product?.price} </p>
                </div>
                <div className='flex w-[96px] h-[32px]  items-center bg-[#F1F1F1] justify-around '>
                    <button className='text-center text-[13px] font-bold leading-normal' onClick={()=> updateQuantity(product?.id, 'decrease')} >-</button>
                    <p className='font-bold leading-normal text-[13px] text-center ' >{Number(product?.quantity)} </p>
                    <button className='text-center text-[13px] font-bold leading-normal'onClick={()=> updateQuantity(product?.id, 'increase')} >+</button>
                </div>
            </div>

        </li>
    )
}