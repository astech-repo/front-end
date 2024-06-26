import { Suspense } from "react";
import PreencherFormulario from "./success";
import { Spinner } from "@chakra-ui/react";

export default function Home(){
  return(
    <Suspense fallback={<div className="w-full h-[75vh] grid place-items-center"><Spinner size={"lg"}/></div>}>
      <PreencherFormulario />
    </Suspense>
  )
}