
export default function Homepage() {
    return (
        <div className="bg-gradient-to-b from-transparent via-[#D9D9D9] to-[#9cb0f7] w-screen h-screen relative">

            <div>
                <div className="flex flex-col mt-[10rem]  absolute ml-[7rem]">
                    <h1 className="w-[600px] text-[40px] font-extrabold leading-[4rem]">Connecting you with skilled professionals for all your household needs.</h1>
                    <p className=" opacity-70">One step solution for all your problems</p>
                </div>
                <button className=" absolute bg-gradient-to-b from-[#c960fa] to-[#685de6] w-[11rem] p-2 h-[2.7rem] ml-[7rem] mt-[60vh] rounded-lg text-xl text-white opacity-80">
                        Get Started
                    </button>
            </div>
            <div className=" w-[600px]  absolute ml-[50vw] mt-[17vh]">
                <div>
                    <img src="/images/painterimg.png" className="w-[12rem] h-[12rem] bg-contain rounded-tr-[60px] rounded-bl-[60px] ml-[23rem] shadow-right-bottom" />
                </div>
                <div>
                    <img src="/images/tailor.png" className="w-[12rem] h-[12rem] bg-contain  rounded-tr-[60px] rounded-bl-[60px] ml-[11rem] shadow-right-bottom" />
                </div>
            </div>
        </div>
    )
}