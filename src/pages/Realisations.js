import React from "react";

export default function Realisations() {
  return (
    <div className="bg-stone-900 h-auto">
      <h1 className="text-white text-center pt-10 font-bold text-4xl underline underline-offset-[17px] decoration-3 decoration-emerald-400 font-newFamilly1">
        Réalisations
      </h1>
      <div className="max-w-full flex justify-center bg-zinc-200 pt-16 pb-32 text-white ">
        <div className=" w-60 bg-orange-800">A</div>
        <div className=" w-60 bg-orange-800">B</div>
        <div className=" w-60 bg-orange-800">C</div>
      </div>
    </div>
  );
}
