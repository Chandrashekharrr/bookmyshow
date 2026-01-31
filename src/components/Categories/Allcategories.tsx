"use client";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Allcategories() {
  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  const links = [
    { url: <FaFacebookF /> },
    { url: <FaXTwitter /> },
    { url: <FaFacebookF /> },
    { url: <FaXTwitter /> },
    { url: <FaFacebookF /> },
    // {url:<FaXTwitter />},
  ];

  return (
    <div className="ategories w-full relative bottom-15 flex flex-col justify-center items-center">
      <button className="categories w-fit p-2 mx-4">
        <div className="images w-44 relative h-6">
          <Image src="/Images/allcat.avif" fill alt="image" />
        </div>
      </button>

      <button
        onClick={handleclick}
        className=" bg-gray-300 font-medium w-full p-3 text-gray-600 flex justify-between items-center"
      >
        <h1 className="text-sm">Know more about BookMyShow</h1>
        <p
          className={`text-2xl transition-all duration-500 ease-in-out outline-none  ${clicked ? "rotate-180" : "rotate-0"}`}
        >
          {clicked ? "-" : "+"}
        </p>
      </button>

      <div className="footerbanner w-full pb-20 bg-zinc-800">
        <div className="tag w-full h-20 flex justify-between gap-5 items-center text-center px-4 ">
          <div className="line w-full h-[0.5px] bg-gray-500"></div>
          <div className="line w-full relative h-full">
            <Image
              src="/Images/red.svg"
              fill
              alt="tagline"
              className="mx-auto my-2"
            />
          </div>
          <div className="line w-full h-[0.5px] bg-gray-500"></div>
        </div>

        <div className="links w-full h-15  flex justify-center items-center gap-3 my-2">
          {links.map((link, index) => (
            <div
              key={index}
              className="circle w-12 h-12 rounded-full bg-gray-300  flex justify-center items-center text-xl text-gray-600"
            >
              {link.url}
            </div>
          ))}
        </div>

        <div className="paragrap w-full text-center text-gray-400 text-sm mt-5 px-4 break-all">
          <p>
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </p>
        </div>
      </div>
    </div>
  );
}
