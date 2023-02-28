import React from "react";
import Image from "next/image";
import mapIcon from "../Images/mapIcon.png";
import phoneIcon from "../Images/phoneIcon.png";
import EnvelopIcon from "../Images/EnvelopIcon.png";
import linkedinIcon from "../Images/linkedinIcon.png";
import facebookIcon from "../Images/facebookIcon.png";
import whatsappIcon from "../Images/whatsappIcon.png";

export default function Contact() {
  return (
    <div className="bg-stone-900 h-auto">
      <h1 className="text-white text-center pt-10 font-bold text-4xl underline underline-offset-[17px] decoration-3 decoration-emerald-400 font-newFamilly1">
        Contact
      </h1>
      <div className="max-w-full flex font-newFamilly1 justify-center  pt-16 pb-32 text-white ">
        <div className="w-2/5 space-y-2 px-16">
          <div className="flex space-x-3">
            <Image className=" w-3 h-5" src={mapIcon} />
            <p>Av. Longo A41 / Kauka/ Kalamu</p>
          </div>
          <div className="flex  space-x-3">
            <Image className="w-3 h-5" src={phoneIcon} />
            <p>+243 815 959 679/ +243 907 806 166</p>
          </div>
          <div className="flex space-x-3">
            <Image className="w-4 h-5 pt-2" src={EnvelopIcon} />
            <p>eunicekinzengele0@gmail.com</p>
          </div>
          <div className=" py-4 ">
            <p className=" text-xl pb-2 font-bold">SUIVEZ-MOI</p>
            <div className="flex space-x-3">
              <Image className=" w-6 h-6" src={linkedinIcon} />
              <Image className=" w-5 h-6 pt-1" src={facebookIcon} />
              <Image className=" w-6 h-6" src={whatsappIcon} />
            </div>
          </div>
        </div>
        <div className="w-3/5 space-y-3 ">
          <h2 className=" text-xl font-semibold pb-4">Laissez un mot</h2>
          <div className=" flex space-x-7">
            <input
              className=" w-64 h-10 rounded-md bg-zinc-600 placeholder:"
              placeholder="votre nom"
              type="text"
              id="name"
              name="name"
            />
            <input
              className=" w-64 h-10 rounded-md bg-zinc-600"
              type="text"
              id="email"
              placeholder="votre mail"
              name="email"
            />
          </div>
          <div className=" w-82">
            <input
              className=" w-10/12 h-28 rounded-md bg-zinc-600 focus:border-r-red-600"
              placeholder="you@example.com"
              type="text"
              id="message"
              name="message"
            />
          </div>
          <div className=" ml-60">
            <button className="bg-emerald-400 p-2 text-lg rounded-xl font-semibold">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
