import { Opc } from "./Animations/Opc"
import { Reveal } from "./Animations/Reveal"
import ImageSlider from "./ImageSlider"
import Navbar from "./Layout/Navbar"
import Link from "next/link"
import WistiaEmbed from "./WistiaEmbed"

export default function Hero02() {
    return (
        <section style={{backgroundImage: 'linear-gradient(to bottom, rgba(0,10,93,0.925323879551821) 0%, rgba(0,0,129,0.2)), url("/bg.jpg")'}} className="bg-center bg-cover flex flex-col min-h-[90vh]">
            <Navbar />
            <div className="text-center text-white py-[70px] pt-[10px] flex flex-col justify-center mt-40">
                <Reveal delayTime={0.2}>
                    <div className="mb-[0px]">
                        <h1 className="text-[36px] leading-[54px] font-medium w-[90%] mb-[20px] mx-auto max-w-[1050px]">Vi eksploderer dine salg med 40-150 % på 90 dage ved at levere salgsparate leads</h1>
                        <p className="text-[18px] font-light w-[90%] mx-auto text-gray-200">Få et hav af kunder med vores performance baseret marketing</p>
                    </div>
                </Reveal>
                <Reveal delayTime={0.3}>
                <div className="mx-auto items-center justify-center mb-10 border flex w-[200px] gap-2 rounded-full py-1 mt-6">
                        <div className="flex items-center">
                            <img className="w-[40px] h-[40px] rounded-full object-cover" src="/people/Gizeno CEO.jpg"></img>
                            <img className="w-[40px] h-[40px] rounded-full object-cover ml-[-14px]" src="/people/Gustav CEO.jpg"></img>
                            <img className="w-[40px] h-[40px] rounded-full object-cover ml-[-14px]" src="/people/Ventur CEO.jpg"></img>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-gray-200">10+ klienter</p>
                            <img className="w-[50px]" src="/5-star.webp"></img>
                        </div>
    
                    </div>
                </Reveal>
                <div className="inline-block mt-10">
                    <Link target="_blank" href={"https://calendly.com/niclas-wwk"} className="bg-gradient-to-br w-full px-10 text-center from-blue-600 via-blue-500 to-indigo-700 text-white py-3 rounded-full font-medium text-sm">Tag kontakt</Link>        
                </div>
            </div>
        </section>
    )
}