import { Suspense } from "react";
import PreencherFormulario from "./success";

export default function Home(){
  return(
    <Suspense fallback={<div>Carregando...</div>}>
      <PreencherFormulario />
    </Suspense>
  )
}