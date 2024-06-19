import CardButton from "@/components/button-home";
import { buttons } from "@/components/buttons.seed";

export default function SelecionarAparelho() {
  return (
    <main className="h-[75vh] mt-[10vh] flex flex-col items-center justify-center text-[#223591] gap-10">
      <h1 className="text-3xl">Selecione um dos aparelhos abaixo:</h1>
      <div className="flex items-center justify-center gap-6">
        {buttons.map((button, index) => (
          <CardButton
            key={index}
            link={button.link}
            title={button.title}
            icon={button.icon}
            tipo={button.tipo}
          />
        ))}
      </div>
    </main>
  );
}
