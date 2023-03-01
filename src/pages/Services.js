import React from "react";
import Image from "next/image";
import laptopIcon  from "../Images/laptopIcon.png";
import pencilIcon from "../Images/pencilIcon.png";

export default function Services() {
  return (
    <div id="service" className=" bg-zinc-600 h-auto font-newFamilly1">
      <h1 className="text-white text-center pt-10 font-bold text-4xl underline underline-offset-[17px] decoration-3 decoration-emerald-400 font-newFamilly1">
        Services
      </h1>
      <div className="max-w-full pt-16 pb-32 flex text-white ">
        <div className="w-1/2 flex justify-center">
            <div className="flex w-7/12 space-x-5 px-5">
                <Image className=" w-16 h-8 my-2" src={laptopIcon}/>
                <div>
                    <h2 className="font-semibold text-xl">Développement Web</h2>
                    <p className=" pt-3">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
            </div>
        </div>
        <div className="w-1/2 flex justify-center">
            <div>
            <div className="flex  w-7/12 space-x-5 px-5">
                <Image className=" w-16 h-8 my-2" src={pencilIcon}/>
                <div>
                    <h2 className="font-semibold text-xl">Développement Web</h2>
                    <p className=" pt-3">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
