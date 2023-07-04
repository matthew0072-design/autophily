import Image from 'next/image'

export default function AudioGear () {

    return (
        <main className="w-full bg-white relative ">
            <div className='flex flex-col lg:mb-[5rem]  lg:justify-between lg:items-center  relative  md:justify-start md:h-[650px] lg:flex-row lg:mx-auto lg:h-[588px] lg:w-[1110px] h-[698px] bg-white w-full '>
                <div className='order-last lg:order-first lg:w-[445px] lg:h-[295px]  lg:flex lg:flex-col lg:justify-between '>
                        <p className='font-bold text-[28px] my-8 leading-[38px] md:h-[88px] md:w-[537px] lg:w-[445px] text-center tracking-[1px] uppercase text-[#000000]
                        md:text-[40px] md:leading-[44px] md:tracking-[1.42857px] md:mx-auto lg:text-left  lg:m-0
                        '>bringing you the <span className='text-[#D87D4A] '>best</span> audio gear</p>
                        <p className='font-medium text-[15px] px-2 leading-[25px] text-center opacity-50 text-[#000000] 
                        md:h-[150px] md:w-[573px] lg:w-[445px] lg:h-[175px] md:mx-auto lg:m-0 lg:p-0 lg:text-left
                        '> Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers,
                            and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience 
                            a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place 
                            to buy your portable audio equipment
                        </p>
                </div>
                <div className=" md:mx-auto md:bg-[url('/audioGearbg.png')] md:bg-no-repeat md:w-[90%]  md:h-[300px] lg:hidden ">

                </div>
                <div className="md:hidden lg:flex">
                <Image src="/audioman.png" width={300} height={300} alt='audio gear' className='h-[300px] md:w-[689px] lg:w-[540px] lg:h-[588px] mx-auto ' />
                </div>
            </div>
        </main>
            
    )
}