import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

    return (
        <footer className=" flex bg-[#101010] h-[654px] lg:h-[365px] md:h-[400px] text-white flex-col md:items-start  justify-around items-center relative "> 
            <div className="flex flex-col md:ml-[39px]  lg:flex-row lg:justify-between lg:items-center  lg:ml-[165px]   lg:w-[1110px] lg:h-[25px] relative ">
            <p className='pb-10   text-[#ffffff]  text-[24px] lg:p-0  tracking-wider font-bold'>audiophile</p>
            <nav className='flex flex-col md:flex-row w-[108px] lg:w-auto md:h-[25px] md:gap-4 h-[148px] lg:gap-8   justify-between items-center md:text-[13px] md:leading-[25px] md:tracking-[2px] md:font-bold '>
                 
                 <Link href="/">HOME</Link>
                 <Link href="/headphones">HEADPHONES</Link>
                 <Link href="/speakers">SPEAKERS</Link>
                 <Link href="/earphones">EARPHONES</Link>    

         </nav>
            </div>
            
            
            <div className="flex flex-col md:ml-[39px] lg:ml-[165px]   w-full lg:w-[1110px]  ">
                <div className=" relative text-[15px]  leading-6 lg:m-0 font-medium md:h-[75px] lg:w-[540px] lg:h-[100px] md:text-left  md:w-[689px] text-center  opacity-50 ">
                <p>Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping
                    you get the most out of personal audio. Come and visit our demo facility &#8208; we&apos;re open 7 days a week.
                </p>
                
                </div>

                <div className='flex flex-col md:flex-row items-center  md:justify-between md:w-[689px] md:h-[25px] md:mt-[5rem] '>

                
                <div>
                <p className='py-12 md:pt-12 opacity-50 text-[15px] font-bold leading-[25px] '>Copyright 2023. All Rights Reserved</p>
                </div>
                <div className="flex justify-center gap-4">
                    <Image src="/facebook.png" width={50} height={50} alt='facebook Image' className="w-[24px] h-[24px]" />
                    <Image src="/twitter.png" width={50} height={50} alt='twitter Image' className="w-[24px] h-[24px]"/>
                    <Image src="/instagram.png" width={50} height={50} alt='instagram Image' className="w-[24px] h-[24px]"/>
                </div>
                </div>
            </div>
            <div>
            
            </div>
        </footer>
    )
}