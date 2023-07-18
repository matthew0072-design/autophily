"use client"

import Cart from './cart';
import { useState } from 'react'
interface OverlayProps {
  isOpen: boolean
  onClose: () => void;
}

export default function Overlay({ onClose, isOpen}: OverlayProps) {
  
  // const [ isClose, setIsClose ] = useState<boolean>(true)

  // const checkoutModalHandler = () => {
  //   setIsClose(!isClose)
  // }


  return (
    <>
    <main>

      {isOpen && (
      <div className="w-full ">
        <div className='bg-gray-800 opacity-50 w-screen h-screen fixed top-0 left-0  z-[9]  'onClick={onClose}> </div>
        <div className="bg-white rounded-[8px] absolute top-[20%] bottom-0 z-[10] w-[fit-content] h-[fit-content]  "    >
        
        
        <Cart onClose={onClose} />

        </div>
        
      </div>) }


        
     
    
    </main>
    </>
  );
};


