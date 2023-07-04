import SpeakerLists from "./SpeakerList"
import AllProduct from "../components/Allproduct"
import AudioGear from "../components/Audiogear"

export default function Speakers () {

    return (
        <main className="flex flex-col">
            <div className="font-bold text-[28px] uppercase bg-black 
            md:text-[40px] md:h-[150px] lg:h-[200px]
            ">
                
                <h3 className="tracking-[2px] text-center p-8 text-[#FFFFFF] leading-7
                md:tracking-[1.429px] md:leading-[44px]
                ">speakers</h3>
                </div>
            <SpeakerLists />
            <AllProduct />
            <AudioGear />
        </main>
    )
}