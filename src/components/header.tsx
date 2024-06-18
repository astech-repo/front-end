import Image from "next/image";
import logo from "../../public/logo.svg";
import { FaPhoneAlt } from "react-icons/fa";
import '@/components/header.css'

export default function Header() {
  return (
    <header className="z-50 w-full h-[15vh] text-[#223591] bg-white fixed top-0 shadow-xl flex items-center justify-center px-8">
      <div className="h-full w-1/3 flex items-center justify-start">
        <Image src={logo} alt="Logo ASTech" className="h-4/5 w-auto" />
      </div>
      <div className="h-full w-1/3 flex items-center justify-center">
        <nav>
          <ul className="flex items-center gap-8">
            <li className="cursor-pointer transition-all">Home</li>
            <li className="cursor-pointer transition-all">Orçamento</li>
          </ul>
        </nav>
      </div>
      <div className="h-full w-1/3 flex items-center justify-end gap-4">
        <div><FaPhoneAlt size={'2rem'} /></div>
        <div>
          <p>(11) 9 1234-5678</p>
          <p>(11) 9 1234-5678</p>
        </div>
      </div>
    </header>
  );
}
