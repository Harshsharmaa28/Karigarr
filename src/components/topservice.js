import Link from 'next/link'

export default function Topservice() {
    return (
        <div className=" overflow-hidden flex flex-col gap-12 w-screen  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#fdfcfc]">
            <h1 className="flex justify-center mt-20 text-5xl font-black">Our Superior Services</h1>
            <div className="flex mx-16 overflow-x-auto custom-scrollbar overflow-y-hidden">
                <div className="flex flex-col rounded-2xl relative">
                    <Link href={'/card'}>
                        <img src="/rectangle 148.png" className=" relative min-w-[300px] h-[430px] rounded-2xl" />
                    </Link>
                    <h1 className=" absolute z-10 text-white mx-[3rem] mt-[17rem] text-5xl">Tailor</h1>
                </div>
                <div className="flex flex-col rounded-2xl relative">
                    <img src="/rectangle 148 (1).png" className="min-w-[380px] h-[430px] rounded-2xl" />
                    <h1 className=" absolute z-10 text-white mx-[6rem] mt-[17rem] text-5xl">Plumber</h1>
                </div>
                <div className="flex flex-col   rounded-2xl relative">
                    <img src="/rectangle 148 (2).png" className="min-w-[380px] h-[430px] rounded-2xl" />
                    <h1 className=" absolute z-10 text-white mx-[8.3rem] mt-[17rem] text-5xl">Maid</h1>
                </div>
                <div className="flex flex-col   rounded-2xl relative">
                    <img src="/rectangle 148 (3).png" className=" min-w-[320px] h-[430px] rounded-2xl" />
                    <h1 className=" absolute z-10 text-white mx-[4.56rem] mt-[17rem] text-5xl">Electrician</h1>
                </div>
                <div className="flex flex-col rounded-2xl relative">
                    <img src="/rectangle 148 (1).png" className="min-w-[380px] h-[430px] rounded-2xl" />
                    <h1 className=" absolute z-10 text-white mx-[8.5rem] mt-[17rem] text-5xl">Tailor</h1>
                </div>
                <div className="flex flex-col rounded-2xl relative">
                    <img src="/rectangle 148 (1).png" className="min-w-[380px] h-[430px] rounded-2xl" />
                    <h1 className=" absolute z-10 text-white mx-[8.5rem] mt-[17rem] text-5xl">Tailor</h1>
                </div>

            </div>
        </div>
    )
}