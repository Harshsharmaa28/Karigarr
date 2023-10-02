 import Footer from "./footer"
 export default function Customer(){
    return(
        <div className=" h-screen flex flex-col justify-between">
            <h1 className=" mt-20 font-extrabold text-5xl text-center">Customer Care</h1>
            <div className=" flex justify-between mx-64 hover:cursor-pointer">
            <img src="/cust.png" className=" mt-12 w-[20rem] h-[20rem]"/>
                <img src="/cs.png" className=" w-[25rem] h-[25rem]"/>
            </div>
            <Footer></Footer>
        </div>
    )
 }