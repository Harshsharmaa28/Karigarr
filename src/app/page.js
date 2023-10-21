import Image from 'next/image'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SecurityIcon from '@mui/icons-material/Security';
import SearchIcon from '@mui/icons-material/Search';
import Components from '../components/components';
import Questions from '@/components/questions';
import Navbar from '@/components/topnavbar';
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import Searchbar from '@/components/searchbar';
import Footer from '@/components/footer';
import Homepage from '@/components/homepage';
import Services from '@/components/services';
import Topservice from '@/components/topservice';
import Faqs from '@/components/faqs';
import Page3 from '@/components/page3';
import Account from '@/components/account';
import Customer from '@/components/customer';
import Chat from '@/components/chat';
export default function Home() {
  return (
    <main className=' vsm:max-w-screen-md:w-screen'>
      <div className='vsm:max-w-screen-md:w-screen overflow-x-hidden'>
        <Navbar></Navbar>
        <Homepage></Homepage>
        <Topservice></Topservice>
        <Page3></Page3>
        <Faqs></Faqs>
        <Customer></Customer>
      </div>
    </main>
  )
}
