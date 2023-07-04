import Image from 'next/image'
import Link from 'next/link'

export default function Speaker () {


    return (
        <main className='flex flex-col bg-white '>
            
            <div className='flex flex-col bg-[#D87D4A] h-[600px] md:h-[720px] relative rounded-[8px] w-[90%]   m-auto  
            lg:h-[560px] lg:w-[1110px] lg:flex-row lg:justify-around lg:items-center
            '>
                
                
                <div className="rounded-full border-white border-[0.5px] h-[19.5rem] md:w-[25rem] md:h-[25rem] w-[19.5rem] mt-8  lg:m-0 mx-auto">

                
                <div className="rounded-full border-white border h-[18rem] md:h-[23rem] md:w-[23rem] w-[18rem] mt-3   mx-auto lg:m-0">
                <div>
                    <Image src="/speaker.png" width={50} height={50} alt="speaker"  className='w-[170px] h-[205px] lg:h-[493px] lg:w-[410.234px] ml-12 md:ml-[7rem] lg:ml-0 md:mt-[5rem] mt-4 lg:mt-[0.55rem] '/>
                </div>
                </div>
                </div>
                <div className="flex flex-col items-center lg:w-[349px] lg:h-[303px] lg:items-start lg:justify-start ">
                    <p className='font-bold text-[36px] leading-[40px] text-center tracking-[1.28571px] uppercase text-[#FFFFFF] 
                    md:text-[56px] md:leading-[58px] md:tracking-[2px] lg:text-left   '>zx9
                    <br/>Speaker</p>
                    <p className='font-medium text-[15px] leading-[25px] text-center opacity-75 text-[#FFFFFF] pt-4 lg:text-left '>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound</p>
                    <Link href="/speakers/4" className='mt-4 w-[160px] h-[48px] bg-[#000000] uppercase tracking-[1px]  leading-[18px] text-[13px] font-bold text-[#FFFFFF] flex justify-center items-center hover:text-black hover:bg-white hover:border hover:border-black '> see product</Link>
                </div>
            </div>
            
            
            
            <div className="h-[320px] bg-[url('/deskSpeaker2.png')] lg:h-[320px] lg:w-[1110px]  md:bg-[url('/deskTablebg.png')] lg:bg-[url('/deskTableDesktop.png')] lg:rounded-[8px]  bg-contain bg-no-repeat w-[90%] mt-4 flex flex-col mx-auto justify-center relative ">
                <div className=" relative flex flex-col gap-4 left-4 md:left-12 lg:left-[9rem]  lg:gap-[32px]  lg:justify-center lg:items-start lg:pt-1 ">
                    <p className='text-[28px] font-bold leading-[38px] tracking-[2px] uppercase text-[#000000]  '>zx7 speaker</p>
                    <Link href="/speakers/5" className='flex justify-center items-center w-[160px] h-[48px] font-bold text-[13px] leading-[18px] tracking-[1px] uppercase bg-transparent border-2 border-black hover:bg-black hover:text-white  ' >see product</Link>
                </div>
                <div className='hidden'>
                    <Image src="/deskSpeaker.png" width={300} height={300} alt='speaker' />
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:mt-8 h-[424px] md:gap-4 rounded-[8px] lg:w-[1110px] lg:gap-8 w-[90%] mx-auto ">
                <div className=" md:bg-[url('/earpodbg.png')] md:w-[339px] md:h-[320px] md:bg-no-repeat lg:hidden "></div>

                <div className='md:hidden lg:flex   '>
                    <Image src="/earpod.png" width={300} height={300} alt="earpiece" className='  lg:w-[540px] lg:h-[320px]  ' />
                </div>
                <div className='h-[200px] rounded-[8px] bg-[#F1F1F1] relative md:w-[339px] lg:w-[540px] md:h-[320px] flex flex-col justify-center  gap-8'>
                    <p className='font-bold text-[28px] tracking-[2px] uppercase leading-[38px] text-[#000000] relative left-4 lg:left-[5rem]  '>yx1 earphones</p>
                    <Link href="/earphones/6" className='h-[48px] w-[160px] border-2 border-black flex justify-center items-center font-bold text-[13px] leading-[18px] tracking-[1px] uppercase  relative left-4 hover:bg-black hover:text-white  lg:left-[5rem]  '>see product</Link>
                </div>
            </div>
        </main>
        
    )
}