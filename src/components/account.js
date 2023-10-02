import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function Account() {
    return (
        <div className=" bg-gradient-to-t from-transparent via-white to-blue-200 w-screen h-screen flex gap-20">
            <div className="flex flex-col gap-2 ml-10">
                <img src="/tailor.png" className=" bg-contain w-[500px] h-[400px] rounded-2xl mt-10" />
                <div className="flex gap-10 ml-16">
                    <button className=" p-1 gap-2 flex rounded-md border border-black w-[4.5rem]">
                        <img src="/call.png" className=" w-[1rem] mt-1" />Call</button>
                    <button className=" p-1 gap-1 flex rounded-md border border-black w-[4.5rem]">
                        <img src="/chat.png" className=" w-[1rem] mt-1" />Chat</button>
                </div>
            </div>
            <div className=' mt-10 flex flex-col custom-scrollbar w-[65vw] overflow-hidden'>
                <div className='flex justify-between mx-5'>
                    <div>
                        <p className=' font-bold text-3xl'>Anjali</p>
                        <p className=' text-center'>Tailor</p>
                    </div>
                    <div className='flex '>
                        <CurrencyRupeeIcon></CurrencyRupeeIcon>
                        <p>200 - Starting</p>
                    </div>
                </div>
                <div className=' mt-5 mx-5'>
                    <p>Hello! I'm Taneja, an experienced tailor with a passion for creating custom clothing and providing expert alterations. With 3 years of hands-on experience in the fashion industry, I bring a unique blend of creativity, craftsmanship, and attention to detail to every project.</p>
                    <div className='flex gap-2 '>
                        <p className=' font-bold text-lg'>Services:</p>
                        <p className=' mt-[2px]'>Custom Clothing Design , Expert alterations, Repair and Restorations, Consultations</p>
                    </div>
                    <div className=' h-[.05rem] bg-gray-500'></div>
                </div>
                <div className=' mt-5 mx-5'>
                    <h1 className=' font-bold text-2xl'>Preffered Location</h1>
                    <p>Near Gali no.3 , Surya Vihar Part-3, Sehatpur, Faridabad </p>
                    <div className=' h-[.05rem] bg-gray-500'></div>
                </div>
                <div className=' mt-5 mx-5 gap-1 flex'>
                    <h1 className=' text-2xl font-bold'>Rating :</h1>
                    <div className=' flex'>
                        <img src="/star.svg" className=' w-8' />
                        <img src="/star.svg" className=' w-8' />
                        <img src="/star.svg" className=' w-8' />
                        <img src="/star.svg" className=' w-8' />
                        <img src="/star.svg" className=' w-8' />
                    </div>
                </div>
                <div className=' mt-5 mx-5 flex flex-col'>
                    <h1 className=' text-2xl font-bold'>Reviews</h1>
                    <div className=' flex gap-16'>
                        <div className=' rounded-xl bg-[#e7e5e5] flex flex-col w-[14rem] h-[8rem]'>
                            <div className='mt-2 mx-2 rounded-md bg-green-600 w-14 text-center font-semibold'>5*</div>
                            <p className=' text-xl mx-2'>She is awesome at work and honest with the client</p>
                        </div>
                        <div className=' rounded-xl bg-[#e7e5e5] flex flex-col w-[14rem] h-[8rem]'>
                            <div className='mt-2 mx-2 rounded-md bg-green-600 w-14 text-center font-semibold'>4*</div>
                            <p className=' text-xl mx-2'>She is good but he took a lot of time</p>
                        </div>
                        <div className=' rounded-xl bg-[#e7e5e5] flex flex-col w-[14rem] h-[8rem]'>
                            <div className='mt-2 mx-2 rounded-md bg-green-600 w-14 text-center font-semibold'>4.5*</div>
                            <p className=' text-xl mx-2'>Nice Work, I got my clothes within 2 Days.</p>
                        </div>
                    </div>
                    <div className=' mt-5 flex gap-5'>
                        <h1 className=' font-bold text-xl'>Response Time :</h1>
                        <p className=' font-bold text-lg'>1 hrs</p>
                    </div>
                    <div className=' mt-5 '>
                        <p className=' font-bold text-2xl'>Why choose me ?</p>
                        <div>
                            <div className=' mt-2 flex '>
                                <p className=' text-lg font-bold w-[16rem]'>1.Quality Craftsmanship:</p>
                                <p>I take pride in my work, using the finest materials and techniques to ensure the highest quality results.</p>
                            </div>
                            <div className=' flex'>
                                <p className=' text-lg font-bold w-[12rem]'>2.Timely Delivery:</p>
                                <p> I understand the importance of deadlines, and I strive to deliver your custom creations and alterations on schedule.</p>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-3'>
                            <h1 className=' text-2xl font-bold'>Additonal Information</h1>
                            <p>The charges depends on the type of work or the contract basis, I am able to handle from the normal stitching tasks to the wedding attires contracts you can contact me to know more about charges for your work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}