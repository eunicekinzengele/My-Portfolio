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
        <div className=" mx-20 w-1/2 ">
          <div className=" border-b-8 border-emerald-400 w-3/4 place-content-between flex pt-5 font-semibold py-1 ">
            <p>Javascript</p>
            <p className=" border-2 px-3 rounded-md border-emerald-400">70%</p>
          </div>
          <div className=" border-b-8 border-emerald-400 w-3/5 place-content-between flex pt-5  font-semibold py-1 ">
            <p>ReactJs</p>
            <p className=" border-2 px-3 rounded-md border-emerald-400">60%</p>
          </div>
          <div className=" border-b-8 border-emerald-400 w-4/5 place-content-between flex pt-5  font-semibold py-1 ">
            <p>Wordpress</p>
            <p className=" border-2 px-3 rounded-md border-emerald-400">80%</p>
          </div>
          <div className=" border-b-8 border-emerald-400 w-2/5 place-content-between flex pt-5  font-semibold py-1 ">
            <p>NodeJs</p>
            <p className=" border-2 px-3 rounded-md border-emerald-400">40%</p>
          </div>
          <div className=" border-b-8 border-emerald-400 w-3/6 place-content-between flex pt-5  font-semibold py-1 ">
            <p>Express</p>
            <p className=" border-2 px-3 rounded-md border-emerald-400">50%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
