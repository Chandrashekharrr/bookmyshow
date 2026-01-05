"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { TbCurrentLocation } from "react-icons/tb";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { PiFilmSlateThin } from "react-icons/pi";




export default function Navbar() {
  const [clicked, SetClicked] = useState(false);
  const [appclicked, SetAppClicked] = useState(false);
  const [searchclicked, SetSearchClicked] = useState(false);

  const handleClick = () => {
    SetClicked(!clicked);
  };

  const handleAppClicked = () => {
    SetAppClicked(!appclicked)
  }
  const handleSearchClicked = () => {
    SetSearchClicked(!searchclicked)
  }


  return (
    <nav className="w-full fixed">
      <div className="deviceslessthenLG1 w-full  h-16 flex p-3 border-b backdrop-blur-sm border-b-gray-300 fixed">
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
          <button onClick={handleAppClicked} className="button border border-gray-300 leading-none p-2 rounded-lg text-Neutral-12PX font-medium text-main cursor-pointer">
            Use App
          </button>
          <BsSearch onClick={handleSearchClicked} className="text-titlePlusbig text-gray-600" />
        </div>
      </div>


      <div
        className={`deviceOverlay ${!clicked ? "hidden" : "block"
          } transition-all duration-1000 ease-in-out w-full h-screen fixed z-50 bg-[#ebeaea] flex flex-col gap-1`}
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

      <div onClick={handleAppClicked} className={`useAppOverlay ${!appclicked ? "hidden" : "block"} w-full h-full bg-black/60 fixed flex items-end justify-center z-50`}>


        <div className="card w-full pb-10 bg-zinc-900  rounded-t-3xl">
          <div className="image w-20 h-10 relative mx-auto my-5">
            <Image
              src="/Images/logo.svg"
              fill
              alt="image"
              className="object-center z-50"
            />
          </div>

          <h1 className="text-white text-center font-bold text-xl leading-none">"Upgrade to BookMyShow App"</h1>

          <p className="break-word text-white py-5 text-center">Get better ticketing & streaming experience with personalised
            recommendations, offers & rewards!</p>


          <div className="buttonWrapper w-full px-5">
            <button className="text-white bg-[#dc354b] flex  justify-center items-center leading-none  mx-auto py-3.5 rounded-lg my-2 w-full">Use BookMyShow App<FaApple /></button>
            <button className="text-white border-2 border-[#dc354b] flex  justify-center items-center leading-none  mx-auto py-3.5 rounded-lg whitespace-nowrap w-full">Use BookMyShow Lite App (0.5 MB)</button>
          </div>
        </div>


      </div>


      <div className={`overlaySearch ${!searchclicked ? "hidden" : "block"} w-full h-full fixed z-50 bg-[#ebeaea] `}>


        <div className="searcbararrow w-full  h-16 border-b border-gray-200 p-3 flex justify-between items-center bg-white">
          <MdOutlineKeyboardArrowLeft onClick={handleSearchClicked} className="text-4xl font-extralight leading-none w-fit" />
          <input type="text" placeholder="Search for Movies, Events, Plays & more" className="w-full p-2  border border-gray-200 outline-none" />

        </div>

        <div className="options w-full shadow-[0px_4px_8px_rgba(0,0,0,0.08)] h-16 flex justify-between items-center gap-2 px-3 overflow-x-scroll bg-white">
          <div className="items py-1.5 px-3 border border-gray-300 rounded-full w-fit"><h1 className="text-[#dc354b] text-md">Movies</h1></div>
          <div className="items py-1.5 px-3 border border-gray-300 rounded-full w-fit"><h1 className="text-[#dc354b] text-md">Streams</h1></div>
          <div className="items py-1.5 px-3 border border-gray-300 rounded-full w-fit"><h1 className="text-[#dc354b] text-md">Events</h1></div>
          <div className="items py-1.5 px-3 border border-gray-300 rounded-full w-fit"><h1 className="text-[#dc354b] text-md">Plays</h1></div>
          <div className="items py-1.5 px-3 border border-gray-300 rounded-full w-fit"><h1 className="text-[#dc354b] text-md">Sports</h1></div>
          <div className="items py-1.5 px-3 border border-gray-300 rounded-full w-fit"><h1 className="text-[#dc354b] text-md">Movies</h1></div>
          <div className="items py-1.5 px-3 border border-gray-300 rounded-full w-fit"><h1 className="text-[#dc354b] text-md">Activities</h1></div>
          <div className="items py-1.5 px-3 border border-gray-300 rounded-full w-fit"><h1 className="text-[#dc354b] text-md">Venues</h1></div>
          <div className="items py-1.5 px-3 border border-gray-300 rounded-full w-fit"><h1 className="text-[#dc354b] text-md">Offers</h1></div>
          <div className="items py-1.5 px-3 border border-gray-300 rounded-full w-fit"><h1 className="text-[#dc354b] text-md">Others</h1></div>

        </div>

        <p className="p-5 uppercase text-gray-900 font-medium text-xs">trending searches</p>

        <div className="otherCities w-full h-[70vh] overflow-y-scroll">

          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>dhurandar</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>Avatar</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>Romeo</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>Stree</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>Stree 2</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>kuala</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>kuala</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>kuala</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>kuala</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>kuala</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>kuala</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>kuala</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>kuala</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>klm</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>kuala</h1> <PiFilmSlateThin  className="text-2xl"/></div>
          <div className={`cities w-full p-3 bg-white active:bg-gray-500 border-b-[0.5px] border-gray-200 flex  justify-between`}><h1>lkml</h1> <PiFilmSlateThin  className="text-2xl"/></div>




        </div>

      </div>





    </nav>
  );
}
