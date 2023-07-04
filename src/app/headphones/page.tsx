import HeadPhoneLists from "./HeadPhoneLists"
import AllProduct from "../components/Allproduct"
import AudioGear from "../components/Audiogear"


export default function HeadPhones() {

    return (
        <main className="flex flex-col ">
            <div className="font-bold text-[28px] uppercase bg-black
            md:text-[40px] md:h-[120px] lg:h-[200px] l
            "> <h3 className="tracking-[2px] text-center p-8 text-[#FFFFFF] leading-7 
            md:leading-[44px] md:tracking-[1.429px]  lg:my-auto 
            
            ">headphones</h3>
            </div>
            <HeadPhoneLists />
            <AllProduct />
            <AudioGear />


        </main>
            
        
    )
}