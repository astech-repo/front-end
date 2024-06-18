import Header from "@/components/header";
import Image from "next/image";
import bghome from "../../public/bg-home.png";
import smartphone from "../../public/smartphone.png";
import card from "../../public/card-home.png";
import { BsChevronDown } from "react-icons/bs";
import CardButton from "@/components/button-home";
import { buttons } from "@/components/buttons.seed";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center text-[#223591]">
      <Header />
      <section className="w-full h-[85vh] mt-[15vh] relative flex justify-center items-center">
        <div className="absolute top-0 left-0 z-0">
          <Image
            src={bghome}
            alt="Background Home"
            className="h-[85vh] w-screen object-cover"
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
            <button className="flex items-center justify-center gap-2 bg-degrade text-white rounded-md px-4 py-2 transition-all hover:brightness-110">
              Saiba mais <BsChevronDown className="animate-bounce" />
            </button>
          </div>
        </div>
      </section>
      <section className="h-[85vh] bg-degrade w-full flex flex-col items-center py-10">
        <h1 className="text-white text-3xl">Nossos Serviços</h1>
        <div className="flex flex-col justify-center items-start w-4/5 h-3/4">
          <div className="flex flex-col justify-center items-start gap-6 z-10">
            <h1 className="text-white text-2xl">Serviços de reparo</h1>
            <div className="flex items-center justify-center gap-8">
              {buttons.map((button, index) => (
                <CardButton
                  key={index}
                  icon={button.icon}
                  title={button.title}
                  link={button.link}
                />
              ))}
            </div>
          </div>
          <div className="absolute right-8 z-0">
            <Image src={card} alt="Assistência Técnica" className="scale-75" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
