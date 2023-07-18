import Thank from './thank'

export default function Page(){

    return(
        <main className='w-full relative '>
            <div className='bg-gray-700 opacity-70 w-screen h-screen fixed top-0 left-0  z-[9]  '> </div>
        <div className="bg-white rounded-[8px] absolute left-[5%] md:left-[15%] lg:left-[30%] top-[50%]  bottom-0 z-[10] w-[90%] md:w-[fit-content] h-[fit-content]   "    >
        
                 <Thank />
        </div>
        
            
        </main>
    )
}