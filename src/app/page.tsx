"use client";
import Image from "next/image";
import bghome from "../../public/bg-home.png";
import smartphone from "../../public/smartphone.png";
import card from "../../public/card-home.png";
import { BsChevronDown } from "react-icons/bs";
import CardButton from "@/components/button-home";
import { buttons } from "@/components/buttons.seed";
import { useRef } from "react";

export default function Home() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const Scroll = () => {
    if (buttonRef.current) {
      window.scroll({
        top: buttonRef.current.offsetTop - 75,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="flex min-w-screen flex-col items-center justify-center text-[#223591]">
      <section className="w-full h-[90vh] mt-[10vh] relative flex justify-center items-center">
        <div className="absolute top-0 left-0 z-0">
          <Image
            src={bghome}
            alt="Background Home"
            className="h-[90vh] w-screen object-cover"
          />
        </div>
        <div className="z-10 flex items-center justify-center">
          <div className="w-1/2 flex justify-end">
            <Image src={smartphone} alt="Smartphone" />
          </div>
          <div className="w-1/2 flex flex-col items-start gap-6">
            <h1 className="text-white text-4xl w-3/4">
              Assistência Técnica 24 horas por dia e 7 dias por semana
            </h1>
            <button
              onClick={Scroll}
              className="flex items-center justify-center gap-2 bg-degrade text-white rounded-md px-4 py-2 transition-all hover:brightness-110"
            >
              Saiba mais <BsChevronDown className="animate-bounce" />
            </button>
          </div>
        </div>
      </section>
      <section
        className="h-[85vh] bg-degrade w-full flex flex-col items-center py-10"
        ref={buttonRef}
      >
        <h1 className="text-white text-3xl">Nossos Serviços</h1>
        <div className="flex flex-col justify-center items-start w-4/5 h-3/4">
          <div className="flex flex-col justify-center items-start gap-6 z-10">
            <h1 className="text-white text-2xl">Serviços de reparo</h1>
            <div className="flex items-center justify-center gap-8">
              {buttons.map((button, index) => (
                <CardButton
                  key={index++}
                  icon={button.icon}
                  title={button.title}
                  link={button.link}
                  tipo={button.tipo}
                />
              ))}
            </div>
          </div>
          <div className="absolute right-8 z-0">
            <Image src={card} alt="Assistência Técnica" className="scale-75" />
          </div>
        </div>
      </section>
    </main>
  );
}
