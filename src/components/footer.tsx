import Image from "next/image";
import logo from "../../public/logo.svg";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-[15vh] bg-white shadow-xl flex items-center justify-center px-8 text-[#223591]">
      <div className="w-1/5 h-4/5 flex items-center justify-center border-r-[1px] border-gray-600">
        <nav>
          <ul className="flex flex-row items-center justify-center gap-8">
          <li className="cursor-pointer transition-all hover:opacity-75">
              <Link href={"/home"}>Home</Link>
            </li>
            <li className="cursor-pointer transition-all hover:opacity-75">
              <Link href={"/selecionar-aparelho"}>Orçamento</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-3/5 h-full flex justify-center items-center">
        <ul className="flex justify-center items-center gap-4">
          <li className="transition-all cursor-pointer hover:opacity-75 flex items-center justify-center gap-3">
            <IoMailOutline /> emailteste@gmail.com
          </li>
          <li className="transition-all cursor-pointer hover:opacity-75 flex items-center justify-center gap-3">
            <FaInstagram /> @astech
          </li>
          <li className="transition-all cursor-pointer hover:opacity-75 flex items-center justify-center gap-3">
            <FaWhatsapp /> (11) 9 1234-5678
          </li>
          <li className="transition-all cursor-pointer hover:opacity-75 flex items-center justify-center gap-3">
            <FaPhone /> (11) 9 1234-5678
          </li>
        </ul>
      </div>
      <div className="h-4/5 border-l-[1px] border-gray-600 w-1/5 flex items-center justify-center">
        <Image src={logo} alt="Logo ASTech" className="h-4/5 w-auto" />
      </div>
    </footer>
  );
}
