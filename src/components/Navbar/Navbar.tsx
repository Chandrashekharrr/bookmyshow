import { BsSearch } from "react-icons/bs";

export default function Navbar(){



    return(
        <nav className="w-full fixed">

            <div className="deviceslessthenLG1 w-full  h-16 flex p-3 border-b-2 border-b-gray-300 fixed">
                
                <div className="part1 w-full flex flex-col gap-2 justify-start ">
                    <h1 className="capitalize text-title font-bold leading-none text-main">It all start&apos;s here!</h1>
                    <p className="leading-none text-Neutral-12PX text-highlighter font-medium cursor-pointer">Pune &gt;</p>
                </div>
                <div className="part2 w-full flex justify-end items-center gap-4 cursor-pointer">
                    <button className="button border border-gray-300 leading-none p-2 rounded-lg text-Neutral-12PX font-medium text-main cursor-pointer">Use App</button>
                    <BsSearch  className="text-titlePlusbig text-gray-600" />
                </div>
            </div>


            <div className="devicesgreaterthenLG2"></div>


            <div className="deviceOverlay w-full h-screen fixed bg-[#f5f5f5] lg:bg-[#4b4c4d]/30">
            
            

            </div>



        </nav>
    )
}