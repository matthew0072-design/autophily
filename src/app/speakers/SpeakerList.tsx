import Image from "next/image"
import Link from "next/link"

export default function SpeakerLists () {

    return (
        <main className='flex flex-col bg-white w-full relative pb-8'>
            <div className='flex flex-col w-[90%] mt-8 m-auto  relative md:h-[706px] md:justify-between 
            lg:w-[1110px] lg:h-[560px] lg:flex-row lg:items-center
            '>
                    <div className=' h-[352px] rounded-[8px] flex bg-[#F1F1F1] lg:w-[540px] lg:h-[560px] '>
                        <Image src="/speaker.png" width={300} height={300} alt='speaker' className="w-[202.2px] h-[243px] lg:w-[291.241px] lg:h-[350px] m-auto " />
                    </div>
                    <div className="flex flex-col items-center mt-5 gap-7 lg:w-[445px] lg:h-[343px]  lg:items-start ">
                        <p className='text-base leading-[19px] text-center tracking-[10px] uppercase text-[#D87D4A] '>new product</p>
                        <p className="font-bold text-[28px] leading-[38px] text-center tracking-[1px] uppercase text-[#000000]
                        md:text-[40px] md:leading-[44px] md:tracking-[1.429px] lg:text-left
                        ">zx99  <br/> speaker</p>
                        <p className="font-medium text-[15px] leading-[25px] text-center opacity-50 text-[#000000] lg:text-left "> Upgrade your sound system with the all new ZX9 active speaker. It&apos;s a bookshelf speaker system that offers truly wireless 
                            connectivity&#8208;creating new possibilities for more pleasing and practical audio setups.
                        </p>
                        <Link href="/speakers/4" className='w-[160px] hover:bg-[#FBAF85] h-[48px] bg-[#D87D4A] flex justify-center items-center  uppercase text-[13px] font-bold leading-[18px] tracking-[1px] text-[#FFFFFF] '>see product</Link>
                    </div>
                </div>

                <div className='flex flex-col w-[90%] mt-8 m-auto  relative md:h-[671px] md:justify-between 
                lg:w-[1110px] lg:h-[560px] lg:flex-row lg:items-center'>
                   
                    <div className="flex flex-col items-center mt-5 gap-7 order-last lg:w-[445px] lg:h-[308px]  lg:justify-between lg:items-start">
                        
                        <p className="font-bold text-[28px] leading-[38px] text-center tracking-[1px] uppercase text-[#000000]
                        md:text-[40px] md:leading-[44px] md:tracking-[1.429px] lg:text-left
                        ">zx7  <br/> speaker</p>
                        <p className="font-medium text-[15px] leading-[25px] text-center opacity-50 text-[#000000] lg:text-left "> Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high&#8208;end audiophile components that represents the top of the line
                            powered speakers for home or studio use.
                        </p>
                        <Link href="/speakers/5"  className='w-[160px] hover:bg-[#FBAF85]  h-[48px] bg-[#D87D4A] flex justify-center items-center  uppercase text-[13px] font-bold leading-[18px] tracking-[1px] text-[#FFFFFF] '>see product</Link>
                    </div>

                    <div className=' h-[352px] rounded-[8px] bg-[#F1F1F1] flex lg:w-[540px] lg:h-[560px] lg:order-last '>
                        <Image src="/speaker2.png" width={300} height={300} alt='speaker' className='w-[169.17px] h-[243px] lg:w-[268.002px] lg:h-[385px] m-auto  ' />
                    </div>
                </div>
        </main>
    )
}