import React from "react";

export default function Competence() {
  return (
    <div className=" bg-zinc-600 h-auto font-newFamilly1">
      <h1 className="text-white text-center pt-10 font-bold text-4xl underline underline-offset-[17px] decoration-3 decoration-emerald-400 font-newFamilly1">
        Compétences
      </h1>
      <div className="max-w-full pt-16 pb-32 text-white ">
        <p className=" px-20 ">
          J’ai eu à travailler et sur des projets personnels et sur ceux avec
          les équipes. <br />
          pour cela,j’ai utilisé certaines technologies.
        </p>
        <div className="px-20 py-2">
          <p className=" text-lg">
            Les téchnologies avec lesquelles je travaille:
          </p>
        </div>
        <div className=" mx-20 bg-orange-500 w-1/2 ">
          <div className=" border-b-4 border-white w-full flex font-semibold py-1 ">
            <p>Javascript</p>
            <p className="">70%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
