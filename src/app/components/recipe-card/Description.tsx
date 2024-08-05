import {Young_Serif } from "next/font/google";
import Image from "next/image";
const young_serif = Young_Serif({ subsets: ["latin"], weight: "400" });

type DescriptionProps = {
    image: string;
    name: string;
    desc: string;
}
const Description = ({image,name,desc}:DescriptionProps) => {
  // console.log(image);
  
  return (
    <div className="flex flex-col gap-10 ">
        <Image
          src={image}
          alt="hero-image"
          width={655}
          height={300}
          className=" rounded-lg "
        />
      <h1 className={`text-4xl   font-bold ${young_serif.className}`}>{name}</h1>
      <p className="text-[1rem]  text-[#8B8783]">{desc}</p>
    </div>
        

      );
    }
    
    export default Description
       

      
