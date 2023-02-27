import React from "react";
import HeroBar from "./HeroBar";
import Apropos from "./Apropos";
import Competence from './Competence';

export default function Accueil() {
  return (
    <div className="bg-zinc-600 max-w-full">
      <section>
        <header className="bg-zinc-700 h-14 flex max-w-full">
          <div className="ml-8">
            <h1 className="text-xl font-semibold text-white p-3 font-newFamilly1">
              Eunice Kinzengele
            </h1>
          </div>
          <div className="ml-44 font-newFamilly1">
            <ul className="flex text-white">
              <li className="p-4">Accueil</li>
              <li className="p-4">A propos</li>
              <li className="p-4">Compétences</li>
              <li className="p-4">Réalisation</li>
              <li className="p-4">Services</li>
            </ul>
          </div>
          <div className="ml-10 p-2.5 ">
            <button className="border-2 border-emerald-400 text-emerald-400  rounded-2xl p-1 font-newFamilly1">
              Contact
            </button>
          </div>
        </header>
      </section>
      <HeroBar />
      <Apropos />
      <Competence/>
    </div>
  );
}
