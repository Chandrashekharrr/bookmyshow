import Image from "next/image"
export default function Allcategories(){



    return(
        <div className="ategories w-full flex flex-col px-4 justify-center items-center ">

            <button className="categories w-fit p-2 mx-auto">
                <div className="images w-44 relative h-6">
                    <Image
                        src="/Images/allcat.avif"
                        fill
                        alt="image"
                    />
                </div>
            </button>

            <div className="lin w-full h-px bg-gray-400"></div>
            <button className="categories w-fit p-2 mx-auto">
                <div className="images w-80 md:w-150 h-14 md:h-24 relative">
                    <Image
                        src="/Images/bookmyshow.avif"
                        fill
                        alt="image"
                    />
                </div>
            </button>
        </div>
    )
}