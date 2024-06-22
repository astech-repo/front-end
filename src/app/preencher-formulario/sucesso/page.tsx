"use client";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Sucesso() {
  return (
    <div className="h-[75vh] mt-[10vh] grid place-items-center">
      <div className="p-6 rounded-md shadow-lg flex flex-col items-center justify-center gap-3">
        <FaRegCircleCheck className="text-green-600 text-8xl" />
        <h1 className="text-center text-xl">Pagamento efetuado</h1>
        <p>Solicitação enviada com sucesso!</p>
        <button onClick={() => window.location.href = "/"} className="bg-degrade text-white px-6 py-3 rounded-md shadow-md transition-all hover:opacity-75">
          Voltar para home
        </button>
      </div>
    </div>
  );
}
