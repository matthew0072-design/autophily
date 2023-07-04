import Image from "next/image"
import Link from "next/link"

export default function EarPhoneLists() {

    return (
        <main className='flex flex-col bg-white w-full relative pb-8'>
            <div className="font-bold text-[28px] uppercase bg-black 
            md:text-[40px] lg:h-[170px]
            "><h3 className="tracking-[2px] text-center p-8 text-[#FFFFFF] leading-7 
            md:leading-[44px] md:tracking-[1.429px] md:h-[150px]
            ">earphones</h3></div>
            
            <div className='flex flex-col w-[90%] mt-8 m-auto  relative md:h-[706px] md:justify-between lg:w-[1110px] lg:h-[560px] 
            lg:flex-row lg:items-center
            '>
                    <div className=' h-[352px] rounded-[8px] flex bg-[#F1F1F1] lg:w-[540px] lg:h-[560px]  '>
                        <Image src="/earphone.png" width={300} height={300} alt='speaker' className="w-[210px] h-[212px] lg:w-[320px] lg:h-[300px] m-auto " />
                    </div>
                    <div className="flex flex-col items-center mt-5 gap-7 lg:w-[445px] lg:h-[343px] lg:items-start  ">
                        <p className='text-base leading-[19px] text-center tracking-[10px] uppercase text-[#D87D4A] '>new product</p>
                        <p className="font-bold text-[28px] leading-[38px] text-center tracking-[1px] uppercase text-[#000000]
                        md:text-[40px] md:leading-[44px] md:tracking-[1.429px] lg:text-left
                        ">yx99 wireless <br/> earphones</p>
                        <p className="font-medium text-[15px] leading-[25px] text-center opacity-50 text-[#000000] lg:text-left  "> Tailor your listening experience with bespoke dynamics drivers from the new YX1 Wireless earphones. Enjoy incredible 
                            high&#8208;fidelity sound even in noisy environments with its active noise cancellation feature.
                             
                        </p>
                        <Link href="/earphones/6" className='w-[160px] hover:bg-[#FBAF85] h-[48px] bg-[#D87D4A] flex justify-center items-center  uppercase text-[13px] font-bold leading-[18px] tracking-[1px] text-[#FFFFFF] '>see product</Link>
                    </div>
                </div>
            
        </main>
    )
}