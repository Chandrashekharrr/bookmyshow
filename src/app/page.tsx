import Allcategories from "@/components/Categories/Allcategories";
import Option from "@/components/Options/Option";

export default function Home(){


  return(
  <div className="main w-full h-screen py-16">

    <Option/>

    <div className="test bg-green-500 w-full h-full relative"></div>
    <Allcategories/>
   
  </div>
  )
}