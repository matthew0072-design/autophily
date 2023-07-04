import Image from 'next/image'
import Link from 'next/link'

export default function HeadPhoneLists () {

    return (
            <main className='flex flex-col bg-white w-full relative pb-8'>
                <div className='flex flex-col w-[90%] mt-8 m-auto md:h-[706px] lg:h-[560px] lg:w-[1110px]  lg:flex-row lg:items-center  relative md:justify-between '>
                    <div className=' h-[352px] rounded-[8px] lg:w-[540px] lg:h-[560px]  flex bg-[#F1F1F1] 
                    md:h-[352px]
                    '>
                        <Image src="/headPhone2.png" width={300} height={300} alt='headset' className="w-[220px] h-[243px] lg:h-[386px] lg:w-[349.238px] m-auto " />
                    </div>
                    <div className="flex flex-col items-center mt-5 gap-7 lg:w-[445px] lg:h-[343px]   lg:justify-between lg:items-start ">
                        <p className='text-base leading-[19px] text-center tracking-[10px] uppercase text-[#D87D4A] '>new product</p>
                        <p className="font-bold text-[28px] leading-[38px] text-center tracking-[1px] uppercase text-[#000000]
                        md:leading-[44px] md:text-[40px] md:tracking-[1.429px]
                        ">xx99 mark ii <br/> headphones</p>
                        <p className="font-medium text-[15px] leading-[25px] text-center opacity-50 text-[#000000] lg:text-left ">The new xx99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by producing 
                            the balanced depth and precision of studio&#8208;quality sound.
                        </p>
                        <Link href="/headphones/1" className='w-[160px] hover:bg-[#FBAF85] h-[48px] bg-[#D87D4A] flex justify-center items-center  uppercase text-[13px] font-bold leading-[18px] tracking-[1px] text-[#FFFFFF] '>see product</Link>
                    </div>
                </div>


                <div className='flex flex-col w-[90%] mt-8 m-auto md:h-[671px] lg:h-[560px] lg:w-[1110px] lg:flex-row lg:items-center relative md:justify-between  '>
                    <div className="flex flex-col items-center mt-5 gap-7 order-last lg:order-first lg:w-[445px] lg:h-[308px] lg:justify-between lg:items-start">
                        
                        <p className="font-bold text-[28px] leading-[38px] text-center tracking-[1px] uppercase text-[#000000] 
                        md:leading-[44px] md:text-[40px] md:tracking-[1.429px]
                        ">xx99 mark i <br/> headphones</p>
                        <p className="font-medium text-[15px] leading-[25px] text-center opacity-50 text-[#000000] lg:text-left  "> As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles,
                            mixing engineers, and music aficionados alike in studios and on the go.
                        </p>
                        <Link href="/headphones/2" className='w-[160px] hover:bg-[#FBAF85] h-[48px] bg-[#D87D4A] flex justify-center items-center  uppercase text-[13px] font-bold leading-[18px] tracking-[1px] text-[#FFFFFF] '>see product</Link>
                    </div>
                    <div className=' h-[352px] rounded-[8px] bg-[#F1F1F1] flex lg:w-[540px] lg:h-[560px] '>
                        <Image src="/headset.png" width={300} height={300} alt='headset' className='w-[172.89px] h-[225px] m-auto lg:h-[385px] lg:w-[295.842px] ' />
                    </div>
                    
                </div>

                <div className='flex flex-col w-[90%] mt-8 m-auto lg:h-[560px] lg:w-[1110px] lg:flex-row lg:items-center relative md:h-[671px]  md:justify-between '>
                    <div className=' h-[352px] rounded-[8px] bg-[#F1F1F1] flex lg:w-[540px] lg:h-[560px]'>
                        <Image src="/headPhone3.png" width={300} height={300} alt='headset' className='w-[172.89px] h-[225px] lg:h-[389px] lg:w-[372.982px] m-auto  ' />
                    </div>
                    <div className="flex flex-col items-center mt-5 gap-7 lg:w-[445px] lg:h-[308px] lg:justify-between lg:items-start  ">
                        
                        <p className="font-bold text-[28px] leading-[38px] text-center tracking-[1px] uppercase text-[#000000] 
                        md:leading-[44px] md:text-[40px] md:tracking-[1.429px] lg:text-left
                        ">xx59  <br/> headphones</p>
                        <p className="font-medium text-[15px] leading-[25px] text-center opacity-50 text-[#000000] lg:text-left ">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant 
                            companion at home or on the moves.
                        </p>
                        <Link href="/headphones/3" className='w-[160px] hover:bg-[#FBAF85]  h-[48px] bg-[#D87D4A] flex justify-center items-center  uppercase text-[13px] font-bold leading-[18px] tracking-[1px] text-[#FFFFFF] '>see product</Link>
                    </div>
                </div>
            </main>
    )
}