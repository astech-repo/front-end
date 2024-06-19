import { GiSmartphone } from "react-icons/gi";
import { MdLaptopMac } from "react-icons/md";
import { IoPrint } from "react-icons/io5";
import { LuGamepad2 } from "react-icons/lu";

export const buttons = [
  {
    title: "Celulares",
    icon: <GiSmartphone />,
    link: "/preencher-formulario",
    tipo: "smartphone"
  },
  {
    title: "Laptops e Notebooks",
    icon: <MdLaptopMac />,
    link: "/preencher-formulario",
    tipo: "laptop"
  },
  {
    title: "Impressoras",
    icon: <IoPrint />,
    link: "/preencher-formulario",
    tipo: "printer"
  },
  {
    title: "Consoles e Controles",
    icon: <LuGamepad2 />,
    link: "/preencher-formulario",
    tipo: "console"
  },
];
