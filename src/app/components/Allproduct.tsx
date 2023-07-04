import Image from 'next/image'
import Link from 'next/link'

export default function AllProduct () {

    return (
        <main className='w-full bg-white'>

        
            <div className="flex flex-col  md:flex-row md:h-[350px] h-[683px] w-full md:gap-4 md:m-auto md:w-[689px] md:justify-center items-center bg-white relative pt-[5rem] pb-[5rem] 
            lg:w-[1110px] lg:h-[284px]  lg:my-12 lg:justify-between 
            ">
                <div  className="h-[165px] rounded-[8px] md:w-[223px] w-[90%] flex flex-col items-center bg-[#F1F1F1] relative  md:mt-[5rem] 
                lg:w-[350px] lg:h-[204px]
                ">
                    <Image src="/headset.png" width={50} height={50} alt='headset' className="h-[104px] lg:h-[160px] lg:w-[122.947px] absolute -top-12 lg:-top-[5rem] w-[79.92px] " />
                    <p className=" relative top-[4rem] leading-[20px] text-[15px] font-bold text-center uppercase tracking-[1.07143px]
                    lg:text-lg lg:tracking-[1.286px] lg:top-[6rem]
                    ">headphones</p>
                    <Link href="/headphones" className="hover:text-[#FBAF85] relative top-[4rem] opacity-50 tracking-[1px] uppercase leading-[18px] text-[13px] font-bold lg:top-[6.5rem] ">
                        
                        shop <span className='inline-block ml-2  '><Image src="/arrow.png" width={100} height={100} alt='arrow' className='w-[5px] h-[10px] ' /> </span>
                        
                        </Link>
                </div>

                <div className="h-[165px] rounded-[8px] bg-[#F1F1F1] md:w-[223px] w-[90%] flex flex-col items-center mt-[5rem]  relative
                lg:w-[350px] lg:h-[204px]
                ">
                    <Image src="/speaker.png" width={200} height={200} alt='speaker' className='absolute -top-10 h-[101px] lg:h-[146px] lg:w-[121.489px] lg:-top-[5rem] w-[84.04px]  ' />
                    <p className=" relative top-[4rem] leading-[20px] text-[15px] font-bold text-center uppercase tracking-[1.07143px] 
                    lg:text-lg lg:tracking-[1.286px] lg:top-[6rem]
                    ">speakers</p>
                    <Link href="/speakers" className=" relative top-[4rem] opacity-50 tracking-[1px] uppercase leading-[18px] text-[13px] font-bold hover:text-[#FBAF85]  lg:top-[6.5rem]  ">
                        shop
                        <span className='inline-block ml-2  '><Image src="/arrow.png" width={100} height={100} alt='arrow' className='w-[5px] h-[10px] ' /> </span>
                        </Link>
                </div>

                <div className="h-[165px] rounded-[8px] bg-[#F1F1F1] md:w-[223px] w-[90%] flex flex-col items-center mt-[5rem] relative
                lg:w-[350px] lg:h-[204px]
                ">
                    <Image src="/earphone.png" width={200} height={200} alt='earphone' className='h-[104px] lg:h-[161px] lg:w-[150px] w-[103px] absolute md:-top-[3rem] lg:-top-[5rem] -top-[4rem] ' />
                    <p className=" relative top-[4rem] uppercase text-center tracking-[1.07143px] leading-[20px] font-bold text-[15px] text-[#000000]
                    lg:text-lg lg:tracking-[1.286px] lg:top-[6rem]
                    ">earphones</p>
                    <Link href="/earphones" className=" relative top-[4rem] opacity-50 tracking-[1px] leading-[18px] text-[13px] font-bold uppercase hover:text-[#FBAF85]  lg:top-[6.5rem] ">shop
                    <span className='inline-block ml-2  '><Image src="/arrow.png" width={100} height={100} alt='arrow' className='w-[5px] h-[10px] ' /> </span>
                    </Link>
                </div>
            </div>
            </main>
    )
}