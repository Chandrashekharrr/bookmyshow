import { HiOutlineTicket } from "react-icons/hi2";
import { CgBoy } from "react-icons/cg";
import { IoVideocam } from "react-icons/io5";
import Image from "next/image";


export default function Footer(){

    return(
        <div className="footer w-full h-16 border-t border-gray-200 fixed bottom-0 flex justify-between items-center backdrop-blur-sm">

            <div className="menuWrapperMob h-full w-full flex flex-col justify-center text-center items-center active:text-[#dc354b]">
                <Image width={22} height={22} alt="image" src="/Images/my.png" className="active:text-[#dc354b]" />
                <h1 className="text-sm active:text-[#dc354b]">Movies</h1>
            </div>

            <div className="menuWrapperMob h-full w-full flex flex-col justify-center text-center items-center active:text-[#dc354b]">
                <IoVideocam className="text-2xl active:text-[#dc354b]"/>
                <h1 className="text-sm active:text-[#dc354b]">Movies</h1>
            </div>
            <div className="menuWrapperMob h-full w-full flex flex-col justify-center text-center items-center ">
                <HiOutlineTicket className="text-2xl active:text-[#dc354b]"/>
                <h1 className="text-sm active:text-[#dc354b]">Live Events</h1>
            </div>
            <div className="menuWrapperMob h-full w-full flex flex-col justify-center text-center items-center ">
                <CgBoy className="text-2xl active:text-[#dc354b]" />
                <h1 className="text-sm active:text-[#dc354b]">Profile</h1>
            </div> 
        </div>
    
    )
}