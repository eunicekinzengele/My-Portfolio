import React from "react";
import Image from "next/image";
import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import image4 from '../Images/image4.png'
import image5 from '../Images/image5.png'


export default function Realisations() {
  return (
    <div className="bg-stone-900 h-auto">
      <h1 className="text-white text-center pt-10 font-bold text-4xl underline underline-offset-[17px] decoration-3 decoration-emerald-400 font-newFamilly1">
        Réalisations
      </h1>
      <div className="max-w-full flex justify-center  pt-16 pb-32 text-white ">
        <div className=" w-72 h-auto space-y-3 ">
          <Image className=" max-w-full" src={image1} alt="fistImage"/>
          <Image className=" max-w-full" src={image2} alt="fistImage"/>

        </div>
        <div className=" w-72 h-auto">
        <Image className=" max-w-full" src={image3} alt="fistImage"/>

        </div>
        <div className=" w-72 h-auto space-y-3">
        <Image className=" max-w-full" src={image4} alt="fistImage"/>
        <Image className=" max-w-full" src={image5} alt="fistImage"/>

        </div>
      </div>
    </div>
  );
}
