import React from "react";
import HeroBar from "./HeroBar";
import Apropos from "./Apropos";
import Competence from "./Competence";
import Realisations from "./Realisations";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Link from "next/link";

export default function Accueil() {

  return (
    <div id="accueil" className="bg-zinc-600 max-w-full">
      <section>
        <header className="bg-zinc-700 h-14 flex max-w-full">
          <div className="ml-8">
            <Link href="#accueil">
            <h1 className="text-xl font-semibold text-white p-3 font-newFamilly1">
              Eunice Kinzengele
            </h1>
            </Link>
          </div>
          <div className="ml-40 font-newFamilly1">
            <ul className="flex text-white items-center p-3 space-x-6">
              <Link href="#accueil">
              <li className="bg-gradient-to-t  from-emerald-500 hover:bg-orange-400 rounded-2xl p-1">
                Accueil
              </li>
              </Link>
              <Link href="#aPropos">
                <li className="bg-gradient-to-t  from-emerald-500 hover:bg-orange-400 rounded-2xl p-1">
                  A propos
                </li>
              </Link>
              <Link href="#competence">
              <li className="bg-gradient-to-t  from-emerald-500 hover:bg-orange-400 rounded-2xl p-1">
                Compétences
              </li>
              </Link>
              <Link href="#realisation">
              <li className=" bg-gradient-to-t from-emerald-500 hover:bg-orange-400 rounded-2xl p-1">
                Réalisation
              </li>
              </Link>
              <Link href="#service">
              <li className=" bg-gradient-to-t from-emerald-500 hover:bg-orange-400 rounded-2xl p-1">
                Services
              </li>
              </Link>
            </ul>
          </div>
          <div className=" content-center flex items-center flex-col w-44 p-2.5 ">
            <Link href="#contact">
           <button href  className="border-2 border-emerald-400 text-emerald-400  rounded-2xl p-1 font-newFamilly1 hover:bg-gradient-to-t from-emerald-500 hover:bg-orange-400 hover:text-white ">
              Contact
            </button>
            </Link>
          </div>
        </header>
      </section>
      <HeroBar />
      <Apropos />
      <Competence />
      <Realisations />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
