export default function Results() {
    return (
        <section style={{background: "radial-gradient(circle, rgba(17,35,83,1) 0%, rgba(11,18,55,1) 54%, rgba(11,10,40,1) 100%), url(/patterns/lines.svg)"}} className="h-100 py-[140px]">
            <div className="w-[90%] mx-auto max-w-[1200px] text-white">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">Results that <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">rock</span></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center gap-10">
                        <div className="border-l-[2px] py-6 px-6 border-blue-500">
                            <p className="text-[22px] w-[80%] font-medium">We identify your ICP and create lists around your best case studies, that they can relate to</p>
                        </div>
                        <div className="border-l-[2px] py-6 px-6 border-blue-500">
                            <p className="text-[22px] w-[80%] font-medium">We create targeted lists of decision makers within your ICP, carefully considering the different interests each role in a company might have</p>
                        </div>
                        <div className="border-l-[2px] py-6 px-6 border-blue-500">
                            <p className="text-[22px] w-[80%] font-medium">We nurture and pre-qualify the leads and send them on a sales meeting with you</p>
                        </div>
                        <div className="border-l-[2px] py-6 px-6 border-blue-500">
                            <p className="text-[22px] w-[80%] font-medium">If you know how to sell your service, the deals will start flowing. Our case studies prove it!</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <img className="w-[500px]" src="/cases/test.png"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}