import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImg from "../Images/HeroPhoto.png";


export default function HeroBar() {
  return (
    <div className=" bg-gradient-to-b from-neutral-900 to-slate-400 via-neutral-600 h-screen flex max-w-full">
      <div className="w-1/2 p-11 mt-3 px-20 text-white font-newFamilly1">
        <h2 className="font-bold text-2xl">Bienvenue</h2>
        <h1 className="font-semibold text-3xl my-3">
          Je suis{" "}
          <span className="text-emerald-400">
            Eunice <br /> Kinzengele
          </span>
        </h1>
        <p className="text-xl">
          Developpeuse web et mobile vivant en République démocratique du congo
        </p>
        <Link href="">
        <button className="bg-emerald-400 my-7 p-2 text-lg rounded-full font-semibold hover:bg-gradient-to-t from-emerald-500 hover:bg-orange-400 hover:text-white">
          Télécharger mon CV
        </button>
        </Link>
      </div>
      <div className="w-1/2 items-center justify-center flex mb-28">
        <Image className="w-8/12 " src={HeroImg} alt="HeroImgage" />
      </div>
    </div>
  );
}
