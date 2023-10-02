
export default function Page3() {
    return (
        <div className=" w-screen flex gap-28 overflow-hidden">
            <div className=" mt-32 ml-20">
                <img src="/images/boyp.png" />
            </div>
            <div className="flex flex-col gap-16 ml-16">
                <div className=" mt-16 w-[500px] flex flex-col gap-2">
                    <p className=" font-extrabold text-3xl leading-10">Simplify your life with our trusted experts, hassle-free service booking, and peace of mind.</p>
                    <p>Experience the convenience of finding skilled professionals for a wide range of services right at your fingertips. From expert tailors to reliable plumbers and more, our platform connects you with the best in the business. Say goodbye to the hassle of searching – we bring the pros to you.</p>
                </div>
                <div className="flex flex-col gap-10 w-[550px]">
                    <div className="flex gap-5">
                        <div className="">
                            <img src="check.svg" className="w-[4rem]" />
                        </div>
                        <div className="">
                            <h1 className=" font-extrabold text-3xl">Convenience</h1>
                            <p className="">Offer the convenience of finding and booking skilled professionals for various tasks from the comfort of their homes.</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="">
                            <img src="check.svg"  className="w-[4rem]"/>
                        </div>
                        <div>
                            <h1 className=" font-extrabold text-3xl">Expertise</h1>
                            <p>Offer the convenience of finding and booking skilled professionals for various tasks from the comfort of their homes.</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="">
                            <img src="check.svg" className="w-[4rem]"/>
                        </div>
                        <div>
                            <h1 className=" font-extrabold text-3xl">Time-Saving</h1>
                            <p>Offer the convenience of finding and booking skilled professionals for various tasks from the comfort of their homes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" rounded-full mr-28 w-[500px] h-[400px] bg-gradient-to-t from-white via-[#ddc7f7] absolute ml-[60vw] -z-10 ">
            </div>
            <div className=" rounded-full mr-28 w-[500px] h-[400px] bg-gradient-to-t from-transparent via-[#f9f8fa] to-transparent absolute ml-[60vw] -z-10">
            </div>
        </div>
    )
}