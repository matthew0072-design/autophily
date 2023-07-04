"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useCartStore } from '../store/store'
import Overlay from './CartItems/cartOverlay'


export default function Header() {
const segment = useSelectedLayoutSegment()

const [isOpen, setIsOpen] = useState(false)    
const [isNavOpen, setIsNavOpen] = useState(false)
const isActive = segment

//toggle the cart
const toggleOverlay = () => {
  setIsOpen(!isOpen)
}



const  { cart } = useCartStore()


    return (
       
       <header className="bg-black text-white relative  h-[58px] box-border border-b border-white   justify-around items-center  flex w-full
       md:justify-start 
       lg:justify-around lg:h-[100px]
       ">
            <div className='md:ml-8 lg:ml-[165px]  '>
            <p className='w-[143px]  text-[#ffffff]  text-[24px]  tracking-wider font-bold 
            
            '>audiophile</p> 
            </div>
            
            
            <section className="lg:hidden order-first 
            md:ml-8 relative
            ">
                {isNavOpen ? (<div  className={`fixed top-0 left-0 h-full translate-x-0 w-full bg-gray-900 text-white transition duration-700 ease-in-out transform z-50 slide-in ${isNavOpen ? 'translate-x-0' : 'translate-full' } `} >
                
                {/* "bg-gray-800 translate-x-0 ease-in-out transition duration-700 transform z-50 h-full flex flex-col  fixed top-0 right-0  w-full */}
                <div onClick={() => setIsNavOpen(!isNavOpen)} className=" m-2   ">
<svg xmlns="http://www.w3.org/2000/svg" 
className=" hover:cursor-pointer"
width="20" 
height="21">
<g fill="#D0D6F9" fillRule="evenodd">
  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
  </g>
</svg>
</div>
                <nav className='flex flex-col p-4'>
                     
                     <Link href="/"  className={`${isActive === null ? 'text-[#D87D4A]' : 'text-white'} py-2 text-[13px] font-bold leading-[25px] tracking-[2px]`} onClick={() => setIsNavOpen(false)} >HOME</Link>
                     <Link href="/headphones"  className={`${isActive === 'headphones' ? 'text-[#D87D4A]' : 'text-white'} py-2 text-[13px] font-bold leading-[25px] tracking-[2px]`}  onClick={() => setIsNavOpen(false)}>HEADPHONES</Link>
                     <Link href="/speakers"  className={`${isActive === 'speakers' ? 'text-[#D87D4A]' : 'text-white'} py-2 text-[13px] font-bold leading-[25px] tracking-[2px]`} onClick={() => setIsNavOpen(false)}>SPEAKERS</Link>
                     <Link href="/earphones" className={`${isActive === 'earphones' ? 'text-[#D87D4A]' : 'text-white'} py-2 text-[13px] font-bold leading-[25px] tracking-[2px]`} onClick={() => setIsNavOpen(false)}>EARPHONES</Link>    
 
             </nav>
                </div>): (
                    <div className="h-[24px]  flex  flex-col " onClick={() => setIsNavOpen(!isNavOpen)}>
            
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className=' hover:cursor-pointer'
                    width="20"
                     height="22">
                      <g fill="#D0D6F9" fillRule="evenodd">
                        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g>
                        </svg>
                  </div>
                )}
            
            
            </section>
            
            <nav className='hidden lg:flex lg:gap-8  lg:w-[427px]  lg:justify-between  '>
                     
                     <Link href="/"  className={`${isActive === null ? 'text-[#D87D4A]' : 'text-white'} py-2 text-[13px] font-bold leading-[25px] tracking-[2px]  `}>HOME</Link>
                     <Link href="/headphones"  className={`${isActive === 'headphones' ? 'text-[#D87D4A]' : 'text-white'} py-2 text-[13px] font-bold leading-[25px] tracking-[2px]`}>HEADPHONES</Link>
                     <Link href="/speakers"  className={`${isActive === 'speakers' ? 'text-[#D87D4A]' : 'text-white'} py-2 text-[13px] font-bold leading-[25px] tracking-[2px]` }>SPEAKERS</Link>
                     <Link href="/earphones"  className={`${isActive === 'earphones' ? 'text-[#D87D4A]' : 'text-white'} py-2 text-[13px] font-bold leading-[25px] tracking-[2px]`}>EARPHONES</Link>    
 
             </nav>
             <div className=' hover:cursor-pointer  relative ' >
             <button onClick={toggleOverlay}  ><Image src='/cart.png' height={50} width={50} alt='image cart' className=' order-last w-[23px] h-[20px] md:ml-[30rem] lg:ml-0  '  />
           <span className="rounded-full text-white w-[1.2rem] h-[1.2rem] bg-[#D87D4A] absolute -top-[0.6rem] left-[1rem] md:left-[31rem] lg:left-[1rem]  font-bold text-[0.875rem] leading-4 text-center  ">{cart ? cart.length : 0} </span>
           </button>
                 <Overlay isOpen={isOpen}  onClose={toggleOverlay} />
             </div>
            
        </header>
    )
}
