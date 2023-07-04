"use client"

import Cart from './cart';

interface OverlayProps {
  isOpen: boolean
  onClose: () => void;
}

export default function Overlay({ onClose, isOpen}: OverlayProps) {
  
  


  return (
    <main>

      {isOpen && (
      <div className="w-full ">
        <div className='bg-gray-800 opacity-50 w-screen h-screen fixed top-0 left-0  z-[9]  'onClick={onClose}> </div>
        <div className="bg-white rounded-[8px] absolute top-[20%] bottom-0 z-[10] w-[fit-content] h-[fit-content]  "    >
        
        
        <Cart  />

        </div>
        
      </div>) }


        
     
    
    </main>
    
  );
};


