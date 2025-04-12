import { useState } from "react";
import logo from "../assets/logoJf.svg";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 ">
      <div className="container mx-auto hidden md:flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex gap-8 text-white">
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
              Portifolio
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
          <img src={logo} alt="logo" />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
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
              Portifolio
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
