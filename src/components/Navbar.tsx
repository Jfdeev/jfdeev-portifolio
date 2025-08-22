import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { BiMoon } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6">
      <div className="container mx-auto hidden md:flex items-center justify-between">
        <div className="flex items-center justify-center gap-4 bg-zinc-700 p-2 rounded-full border border-neutral-600">
          {/* Bottao para trocar tema para dark e ligth */}
          <BiMoon className="text-2xl text-zinc-100 cursor-pointer" />
        </div>

        {/* Links de navegação com efeito luminoso */}
        <div className="flex items-center bg-zinc-800 border border-neutral-700 p-2 rounded-full">
          <ul className="flex gap-5 text-zinc-200 font-semibold">
            <li className="relative group">
              {/* Efeito luminoso suave e minimalista */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:w-full transition-all duration-500 ease-out opacity-0 group-hover:opacity-60"></div>
              <a 
                href="#"
                className="px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white"
              >
                Inicio
              </a>
            </li>
            <li className="relative group">
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:w-full transition-all duration-500 ease-out opacity-0 group-hover:opacity-60"></div>
              <a 
                href="#"
                className="px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white"
              >
                Sobre
              </a>
            </li>
            <li className="relative group">
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:w-full transition-all duration-500 ease-out opacity-0 group-hover:opacity-60"></div>
              <a 
                href="#"
                className="px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white"
              >
                Servicos
              </a>
            </li>
            <li className="relative group">
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:w-full transition-all duration-500 ease-out opacity-0 group-hover:opacity-60"></div>
              <a 
                href="#"
                className="px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white"
              >
                Projetos
              </a>
            </li>
            <li className="relative group">
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:w-full transition-all duration-500 ease-out opacity-0 group-hover:opacity-60"></div>
              <a 
                href="#"
                className="px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white"
              >
                Contato
              </a>
            </li> 
          </ul>
        </div>
        
        {/* Ícones das redes sociais */}
        <ul className="flex gap-4 text-2xl text-white">
          <li>
            <a 
              href="#"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a 
              href="#"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-gray-500"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a 
              href="#"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-red-500"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a 
              href="#"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-neutral-600"
            >
              <FaSquareXTwitter />
            </a>
          </li>
          <li>
            <a 
              href="#"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      {/* Navbar para telas mobile */}
      <div className="container mx-auto md:hidden flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-4 bg-zinc-700 p-2 rounded-full border border-neutral-600">
            {/* Bottao para trocar tema para dark e ligth */}
            <BiMoon className="text-2xl text-zinc-100 cursor-pointer" />
          </div>
          {/* Botão de menu */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={24} className="text-white" /> : <HiMenu size={24} className="text-white" />}
          </button>
        </div>
        {isOpen && (
          <div className="mt-4">
            {/* Links de navegação empilhados */}
            <ul className="flex flex-col gap-4 text-white">
              <li>
                <a 
                    href="#"
                    className="relative transition-transform duration-300 ease-in-out group"
                >
                    Inicio
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-600 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left"></span>
                </a>
              </li>
              <li>
              <a 
              href="#"
              className="relative transition-transform duration-300 ease-in-out group"
            >
              Sobre
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-600 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left"></span>
            </a>
              </li>
              <li>
              <a 
              href="#"
              className="relative transition-transform duration-300 ease-in-out group"
            >
              Servicos
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-600 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left"></span>
            </a>
              </li>
              <li>
              <a 
              href="#"
              className="relative transition-transform duration-300 ease-in-out group"
            >
              Projetos
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-600 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left"></span>
            </a>
              </li>
              <li>
              <a 
              href="#"
              className="relative transition-transform duration-300 ease-in-out group"
            >
              Contato
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-600 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left"></span>
            </a>
              </li>
            </ul>
            {/* Ícones das redes sociais alinhados horizontalmente */}
            <div className="flex items-center justify-center gap-4 text-2xl text-white mt-4">
              <a 
                href="#"
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a 
                href="#"
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-gray-500"
              >
                <FaGithub />
              </a>
              <a 
                href="#"
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-red-500"
              >
                <FaYoutube />
              </a>
              <a 
                href="#"
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-neutral-600"
              >
                <FaSquareXTwitter />
              </a>
              <a 
                href="#"
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;