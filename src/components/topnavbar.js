'use client'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from 'next/link';
export default function Navbar() {
    function getlogin() {
        return (
            <Link href="/login">
                <a>Login</a>
            </Link>
        )
    }
    return (
        <div className='vsm:max-sm:flex flex justify-between h-[50px] mx-[4rem]'>
            <div className='vsm:max-sm: text-xl font-extrabold mt-2'>
                <h1 className=' font-black font-serif'>KARIGAR</h1>
            </div>
            <div className='vsm:max-sm:hidden flex gap-10 mt-3 opacity-70'>
                <p>For you</p>
                <p>Discover</p>
                <p>Hire</p>
                <p>Assests</p>
                <p>Jobs</p>
            </div>
            <div className='vsm:max-sm:absolute vsm:max-sm:h-8 vsm:max-sm:text-lg vsm:max-sm:font-extrabold flex gap-4 mt-2'>
                <div className='flex justify-between h-8 gap-6 font-bold text-white'>
                    <img src="bell.svg" alt="" className='h-6 mt-1 mr-4'/>
                    <button  className='bg-white bg-opacity-20  text-black border-2 border-black hover:shadow-xl hover:bg-gray-100 rounded-2xl w-[6vw]'>
                       <Link href={'/login'}>Login</Link>
                    </button>

                    <button className=' w-[7vw] bg-black hover:shadow-xl hover:bg-slate-800 rounded-2xl p-1'>
                    <Link href={'/register/registerUser'}>Register</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}