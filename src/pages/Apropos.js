import React from "react";

export default function Apropos() {
  return (
    <div id="aPropos" className="bg-stone-900 h-auto">
      <h1 className="text-white text-center pt-10 font-bold text-4xl underline underline-offset-[17px] decoration-3 decoration-emerald-400 font-newFamilly1">
        A Propos
      </h1>
      <div className="max-w-full  flex pt-20 pb-32">
        <div className=" w-1/2 text-white font-newFamilly1 px-20 ">
          <p className="text-3xl">
            Je suis <span className="text-emerald-400">Eunice Kinzengele</span>{" "}
            Développeuse web
          </p>

          <p className="text-lg py-7">
            Je vous aide à concevoir des sites web et mobile, ainsi que des
            applications répondant à vos besoin, selon que vous voulez gérer
            votre entreprise ou créer des idées de projets <br/> <br/>
             C’est un metier que
            je fais avec passion, ce qui me permet de donner tout le meilleur de
            moi <br/> <br/>
            Je suis disposée à répondre à toutes question liée à moi et qui
            n’a pas été écrit
          </p>
        </div>
        <div className="text-white font-newFamilly1 text-2xl  w-1/2">
            <p className=" border-b-2 border-stone-600 w-96 py-5">Nom: Eunice Kinzengele</p>
            <p className=" border-b-2 border-stone-600 w-96 py-5">Email: eunicekinzengele0@gmail.com</p>
            <p className=" border-b-2 border-stone-600 w-96 py-5">Téléphone: 0815959679</p>
            <p className="  w-96 py-5">Ville: Kinshasa</p>
            <button className=" border-solid border-2  border-emerald-400 text-emerald-400 text-xl p-2 font-semibold rounded-3xl mt-8 font-newFamilly1">
              Télécharger mon CV
            </button>
        </div>
      </div>
    </div>
  );
}
