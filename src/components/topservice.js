import Link from 'next/link'

export default function Topservice() {
    return (
        <div className=" overflow-hidden flex flex-col gap-12 w-screen  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#fdfcfc]">
            <h1 className="flex justify-center mt-20 text-5xl font-black">Our Superior Services</h1>
            <div className="flex mx-16 overflow-x-auto custom-scrollbar overflow-y-hidden">
                <div className="flex flex-col rounded-2xl relative">
                    <Link href={'/services/Tailors'}>
                        <img src="/rectangle 148.png" className=" hover:cursor-pointer relative min-w-[300px] h-[430px] rounded-2xl" />
                    </Link>
                    <h1 className=" absolute z-10 text-white mx-[4rem] mt-[17rem] text-4xl font-bold">Tailor</h1>
                </div>
                <div className="flex flex-col rounded-2xl hover:cursor-pointer relative">
                    <Link href={'/card'}>
                        <img src="/rectangle 148 (1).png" className="min-w-[380px] h-[430px] rounded-2xl" /></Link>
                    <h1 className=" absolute z-10 text-white mx-[7rem] mt-[17rem] text-4xl font-bold">Plumber</h1>
                </div>
                <div className="flex flex-col   rounded-2xl hover:cursor-pointer relative">
                    <Link href={'/card'}>
                        <img src="/rectangle 148 (2).png" className="min-w-[380px] h-[430px] rounded-2xl" /></Link>
                    <h1 className=" absolute z-10 text-white mx-[9.3rem] mt-[17rem] text-4xl font-bold">Maid</h1>
                </div>
                <div className="flex flex-col   rounded-2xl hover:cursor-pointer relative">
                    <Link href={'/card'}>
                        <img src="/rectangle 148 (3).png" className=" min-w-[320px] h-[430px] rounded-2xl" /></Link>
                    <h1 className=" absolute z-10 text-white mx-[6rem] mt-[17rem] text-4xl font-bold">Electrician</h1>
                </div>
                <div className="  flex flex-col rounded-2xl hover:cursor-pointer relative">
                    <Link href={'/card'}>
                        <img src="/images/carp.png" className=" shadow-inner shadow-black bg-contain ml-20 mt-[3.7rem] min-w-[170px] h-[310px] rounded-2xl" /></Link>
                    <h1 className=" absolute z-10 text-white mx-[7.3rem] mt-[17rem] text-4xl font-bold overflow-hidden">Carpenter</h1>
                </div>
                <div className="flex flex-col rounded-2xl hover:cursor-pointer relative">
                    <Link href={'/card'}>
                        <img src="/images/bath.jpeg" className=" shadow-inner shadow-black bg-contain ml-40 mt-[3.7rem] min-w-[90px] h-[310px] rounded-2xl" /></Link>
                    <h1 className="   absolute z-10 text-white mx-[12.5rem] font-bold mt-[16rem] text-4xl">Explore More</h1>
                </div>
                {/* <div className="flex flex-col rounded-2xl hover:cursor-pointer relative bg-">
                    <Link href={'/card'}>
                    <h1 className="   absolute z-10 text-white mx-[12.5rem] font-bold mt-[16rem] text-4xl">Explore more</h1>
                    </Link>
                </div> */}

            </div>
        </div>
    )
}