import Image from "next/image";

const images = [
    { id: 1, src: "/Images/opt1.avif" },
    { id: 2, src: "/Images/opt2.avif" },
    { id: 3, src: "/Images/opt3.avif" },
    { id: 4, src: "/Images/opt4.avif" },
    { id: 5, src: "/Images/opt5.avif" },
    { id: 6, src: "/Images/opt6.avif" },
    { id: 7, src: "/Images/opt7.avif" },
];

export default function Option() {
  return (
    <div className="w-full h-20 md:h-28 pl-2 flex items-center overflow-x-auto gap-2 no-scrollbar md:my-5">
      {images.map((img) => (
        <div
          key={img.id}
          className="relative w-16 md:w-28  h-16 md:h-28 shrink-0"
        >
          <Image
            src={img.src}
            fill
            className="object-cover object-center "
            alt="image"
          />
        </div> 
      ))}
    </div>
  );
}
