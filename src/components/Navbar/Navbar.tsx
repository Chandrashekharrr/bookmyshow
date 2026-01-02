"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { TbCurrentLocation } from "react-icons/tb";
import Image from "next/image";

export default function Navbar() {
  const [clicked, SetClicked] = useState(false);
  const [active, SetActive] = useState(false);

  const handleClick = () => {
    SetClicked(!clicked);
  };

  return (
    <nav className="w-full fixed">
      <div className="deviceslessthenLG1 w-full  h-16 flex p-3 border-b-2 border-b-gray-300 fixed">
        <div className="part1 w-full flex flex-col gap-2 justify-start ">
          <h1 className="capitalize text-title font-bold leading-none text-main">
            It all start&apos;s here!
          </h1>
          <p
            onClick={handleClick}
            className="transition-all duration-1000 ease-in-out leading-none text-Neutral-12PX text-highlighter font-medium cursor-pointer"
          >
            Pune &gt;
          </p>
        </div>
        <div className="part2 w-full flex justify-end items-center gap-4 cursor-pointer">
          <button className="button border border-gray-300 leading-none p-2 rounded-lg text-Neutral-12PX font-medium text-main cursor-pointer">
            Use App
          </button>
          <BsSearch className="text-titlePlusbig text-gray-600" />
        </div>
      </div>

      <div className="devicesgreaterthenLG2"></div>

      <div
        className={`deviceOverlay ${
          !clicked ? "hidden" : "block"
        } transition-all duration-1000 ease-in-out w-full h-screen fixed bg-[#ebeaea] flex flex-col gap-1`}
      >
        <div className="FirstDiv w-full bg-white flex justify-start items-center p-4 text-secondBase">
          <button
            onClick={handleClick}
            className="text-titlePlusbig cursor-pointer"
          >
            <RxCross1 />
          </button>
          <h1 className="font-bold text-secondBase leading-none w-full text-center">
            Pune
          </h1>
        </div>

        <div className="search w-full  p-2 cursor-pointer">
          <div className="searchbar w-full bg-white flex justify-center items-center p-2.5 rounded-lg gap-3 text-SecondBase cursor-pointer">
            <BsSearch className="cursor-pointer" />
            <input
              type="text"
              className="w-full placeholder:text-SecondBase placeholder:font-medium tracking-tight outline-none"
              placeholder="Search for your city"
            />
          </div>
        </div>

        <div className="location w-full text-SecondBase font-medium flex justify-start items-center gap-3 text-highlighter bg-white p-3">
          <TbCurrentLocation />
          <h1>Detect my location</h1>
        </div>

        <h1 className="uppercase text-Neutral-12PX font-medium text-main leading-none p-3">
          popular cities
        </h1>

        <div className=" w-full flex flex-col">


          <div className="wrapper w-full bg-white">
            <div className="row1 w-full flex border-[0.5px] border-gray-200">
              
              
              <div className="section  p-2 flex flex-col justify-center items-center text-center w-full border-r-[0.5px] border-gray-200">
               
                <div className="imageDiv relative w-14 h-12">
                  <Image
                    src="/Images/mumbai.avif"
                    fill
                    className="absolute object-center"
                    alt="city"
                  />
                </div>

                <p className="cities text-Neutral-12PX">mumbai</p>

              </div>
              <div className="section  p-2 flex flex-col justify-center items-center text-center w-full border-r-[0.5px] border-gray-200">
               
                <div className="imageDiv relative w-14 h-12">
                  <Image
                    src="/Images/mumbai.avif"
                    fill
                    className="absolute object-center"
                    alt="city"
                  />
                </div>

                <p className="cities text-Neutral-12PX">mumbai</p>

              </div>
              <div className="section  p-2 flex flex-col justify-center items-center text-center w-full border-r-[0.5px] border-gray-200">
               
                <div className="imageDiv relative w-14 h-12">
                  <Image
                    src="/Images/mumbai.avif"
                    fill
                    className="absolute object-center"
                    alt="city"
                  />
                </div>

                <p className="cities text-Neutral-12PX">mumbai</p>

              </div>
              <div className="section  p-2 flex flex-col justify-center items-center text-center w-full">
               
                <div className="imageDiv relative w-14 h-12">
                  <Image
                    src="/Images/mumbai.avif"
                    fill
                    className="absolute object-center"
                    alt="city"
                  />
                </div>

                <p className="cities text-Neutral-12PX">Mumbai</p>

              </div>





            </div>
          </div>
          
          <div className="wrapper w-full bg-white">
            <div className="row1 w-full flex border-[0.5px] border-gray-200">
              
              
              <div className="section  p-2 flex flex-col justify-center items-center text-center w-full border-r-[0.5px] border-gray-200">
               
                <div className="imageDiv relative w-14 h-12">
                  <Image
                    src="/Images/mumbai.avif"
                    fill
                    className="absolute object-center"
                    alt="city"
                  />
                </div>

                <p className="cities text-Neutral-12PX">mumbai</p>

              </div>
              <div className="section  p-2 flex flex-col justify-center items-center text-center w-full border-r-[0.5px] border-gray-200">
               
                <div className="imageDiv relative w-14 h-12">
                  <Image
                    src="/Images/mumbai.avif"
                    fill
                    className="absolute object-center"
                    alt="city"
                  />
                </div>

                <p className="cities text-Neutral-12PX">mumbai</p>

              </div>
              <div className="section  p-2 flex flex-col justify-center items-center text-center w-full border-r-[0.5px] border-gray-200">
               
                <div className="imageDiv relative w-14 h-12">
                  <Image
                    src="/Images/mumbai.avif"
                    fill
                    className="absolute object-center"
                    alt="city"
                  />
                </div>

                <p className="cities text-Neutral-12PX">mumbai</p>

              </div>
              <div className="section  p-2 flex flex-col justify-center items-center text-center w-full">
               
                <div className="imageDiv relative w-14 h-12">
                  <Image
                    src="/Images/mumbai.avif"
                    fill
                    className="absolute object-center"
                    alt="city"
                  />
                </div>

                <p className="cities text-Neutral-12PX">Mumbai</p>

              </div>





            </div>
          </div>   

          <div className="wrapper w-full bg-white">
            <div className="row1 w-full flex border-[0.5px] border-gray-200">
              
              
              <div className="section  p-2 flex flex-col justify-center items-center text-center w-full border-r-[0.5px] border-gray-200">
               
                <div className="imageDiv relative w-14 h-12">
                  <Image
                    src="/Images/mumbai.avif"
                    fill
                    className="absolute object-center"
                    alt="city"
                  />
                </div>

                <p className="cities text-Neutral-12PX">mumbai</p>

              </div>
              <div className="section  p-2 flex flex-col justify-center items-center text-center w-full border-r-[0.5px] border-gray-200">
               
                <div className="imageDiv relative w-14 h-12">
                  <Image
                    src="/Images/mumbai.avif"
                    fill
                    className="absolute object-center"
                    alt="city"
                  />
                </div>

                <p className="cities text-Neutral-12PX">mumbai</p>

              </div>
              





            </div>
          </div>



        </div>

        <h1 className="uppercase text-Neutral-12PX font-medium text-main leading-none p-3">
          Other cities
        </h1>

        <div className="otherCities w-full h-full overflow-y-scroll">

            <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 `}><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>
            <div className="cities w-full p-3 bg-white border-b-[0.5px] border-gray-200 "><h1>kuala</h1></div>




        </div>


      </div>
    </nav>
  );
}
