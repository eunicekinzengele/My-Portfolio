import React from "react";
import HeroBar from "./HeroBar";
import Apropos from "./Apropos";
import Competence from './Competence';
import Realisations from './Realisations';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

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
          <div className="ml-40 font-newFamilly1">
            <ul className="flex text-white items-center p-3 space-x-6">
              <li className="bg-gradient-to-t  from-emerald-500 hover:bg-orange-400 rounded-2xl p-1">Accueil</li>
              <li className="bg-gradient-to-t  from-emerald-500 hover:bg-orange-400 rounded-2xl p-1">A propos</li>
              <li className="bg-gradient-to-t  from-emerald-500 hover:bg-orange-400 rounded-2xl p-1">Compétences</li>
              <li className=" bg-gradient-to-t from-emerald-500 hover:bg-orange-400 rounded-2xl p-1">Réalisation</li>
              <li className=" bg-gradient-to-t from-emerald-500 hover:bg-orange-400 rounded-2xl p-1">Services</li>
            </ul>
          </div>
          <div className=" content-center flex items-center flex-col w-44 p-2.5 ">
            <button className="border-2 border-emerald-400 text-emerald-400  rounded-2xl p-1 font-newFamilly1 hover:bg-gradient-to-t from-emerald-500 hover:bg-orange-400 hover:text-white ">
              Contact
            </button>
          </div>
        </header>
      </section>
      <HeroBar />
      <Apropos />
      <Competence/>
      <Realisations/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}
