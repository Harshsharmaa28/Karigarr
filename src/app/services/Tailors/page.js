import Navbar from '@/components/topnavbar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Star, ChevronDown } from 'lucide-react'
import Link from 'next/link'
export default function Card() {
    return (
        <div className=' '>
            <Navbar>

               
            </Navbar>
            {/* <div> jai mata di</div> */}
            <div className="flex flex-wrap gap-10 justify-between mx-20 mt-5">
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <Link href={'/account'}>
                        <img
                            src="/comp1.jpg"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        /></Link>
                        <div className="p-4 ">
                            <h1 className="text-lg font-semibold">Anjali</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">50 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>400</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/comp2.jpg  "
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover border"
                        />
                        <div className="p-4 ">
                            <h1 className="text-lg font-semibold">Shikha</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">22 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>250</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/comp3.jpg  "
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Priya</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[300px] rounded-md border border-black bg-white">
                        <img
                            src="/comp4.jpg  "
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">Maithlee</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Having more than 3 years of experience and have stiched more than 5000 orders.
                            </p>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                    <span className="ml-3 inline-block text-xs font-semibold">5 Reviews</span>
                                </span>
                            </div>
                            <h1 className=' font-bold'>Pricing - <CurrencyRupeeIcon className='h-[1.25rem] mb-1'></CurrencyRupeeIcon>200</h1>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}