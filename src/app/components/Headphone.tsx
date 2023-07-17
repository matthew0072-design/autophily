import Image from 'next/image'
import Link from 'next/link'

export default function Headphone() {

    return (
        <main className="relative  bg-[url('/headPhone2.png')] bg-black pt-4  w-screen md:h-[729px]  bg-no-repeat bg-top  md:bg-center md:bg-[length:550px_600px]  text-white
        lg:bg-none lg:flex lg:justify-around
        ">
            <div className='flex flex-col gap-4 h-[390px] md:mt-[13rem] mt-8
            lg:w-[398px] lg:h-[346px] lg:justify-between lg:items-start 
            '>
                <p className='text-sm leading-[19px] text-center tracking-[10px] opacity-50 uppercase 
                md:text-[#FFFFFF] 
                '> new product </p>
                <p className='font-bold tracking-[1.28571px] uppercase  leading-[40px] text-[36px] text-center
                md:text-[56px] md:leading-[58px] md:tracking-[2px] lg:text-left
                '>xx99 mark ii headphones </p>
                <p className='text-center leading-[25px] text-[15px] opacity-75 font-medium
                md:w-[349px] md:text-center  md:mx-auto lg:text-left  lg:mx-0
                '>Experience natural. lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
                <Link href='/headphones/1' className="bg-[#D87D4A] font-bold w-[160px] mx-auto flex justify-center items-center  h-[48px] text-[13px] tracking-[1px] uppercase leading-[18px] lg:mx-0 hover:bg-[#FBAF85] ">see product</Link>
            </div>
            <div className="hidden lg:flex ">
                <Image src="/headPhone2.png" width={300} height={300} alt="headphone" className='lg:w-[600px]  ' />
            </div>
        </main>
    )
} 