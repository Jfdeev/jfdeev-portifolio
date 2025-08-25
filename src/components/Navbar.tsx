import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { BiMoon } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Inicio");

  const navItems = [
    { name: "Inicio", href: "#" },
    { name: "Sobre", href: "#" },
    { name: "Tecnologias", href: "#" },
    { name: "Contato", href: "#" },
  ];

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
                Tecnologias
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

      {/* Navbar para telas mobile com Card Nav estilo React Bits */}
      <div className="container mx-auto md:hidden flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-4 bg-zinc-700 p-2 rounded-full border border-neutral-600">
            {/* Bottao para trocar tema para dark e ligth */}
            <BiMoon className="text-2xl text-zinc-100 cursor-pointer" />
          </div>
          {/* Botão de menu */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-700/50 transition-all duration-300"
          >
            {isOpen ? (
              <IoMdClose size={24} className="text-white transform rotate-90 transition-transform duration-300" />
            ) : (
              <HiMenu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Card Nav Mobile - Estilo React Bits */}
        <div className={`mt-4 transition-all duration-500 ease-in-out ${
  isOpen 
    ? 'opacity-100 transform translate-y-0 max-h-screen' 
    : 'opacity-0 transform -translate-y-4 max-h-0'
} overflow-hidden`}>

          <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-zinc-700/50 p-6 shadow-2xl">
            {/* Gradiente de fundo sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl"></div>
            
            {/* Navigation Cards */}
            <div className="relative space-y-2">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`
                    group relative overflow-hidden rounded-xl transition-all duration-300 ease-out
                    ${activeTab === item.name 
                      ? 'bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/10' 
                      : 'bg-zinc-800/30 border border-zinc-700/30 hover:bg-zinc-800/50 hover:border-zinc-600/50'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? `slideIn 0.6s ease-out ${index * 100}ms both` : 'none'
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    className="relative block px-4 py-4 text-zinc-200 font-medium transition-all duration-300 group-hover:text-white"
                  >
                    {/* Indicador ativo */}
                    {activeTab === item.name && (
                      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full shadow-sm shadow-purple-400/50"></div>
                    )}
                    
                    {/* Conteúdo */}
                    <div className={`flex items-center gap-3 ${activeTab === item.name ? 'ml-4' : ''}`}>
                      <div className={`
                        w-2 h-2 rounded-full transition-all duration-300
                        ${activeTab === item.name 
                          ? 'bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm shadow-purple-400/50' 
                          : 'bg-zinc-500 group-hover:bg-zinc-300'
                        }
                      `}></div>
                      <span className="relative">
                        {item.name}
                        {activeTab === item.name && (
                          <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-purple-400 via-pink-400 to-transparent opacity-60"></div>
                        )}
                      </span>
                    </div>

                    {/* Efeito de hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </a>
                </div>
              ))}
            </div>

            {/* Divisor */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>

            {/* Redes Sociais em Card Style */}
            <div className="relative">
              <h4 className="text-sm font-medium text-zinc-400 mb-3">Conecte-se</h4>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { icon: FaLinkedin, color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/10' },
                  { icon: FaGithub, color: 'hover:text-gray-300', bg: 'hover:bg-gray-500/10' },
                  { icon: FaYoutube, color: 'hover:text-red-500', bg: 'hover:bg-red-500/10' },
                  { icon: FaSquareXTwitter, color: 'hover:text-gray-400', bg: 'hover:bg-gray-400/10' },
                  { icon: FaInstagram, color: 'hover:text-pink-500', bg: 'hover:bg-pink-500/10' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`
                      group relative p-2 rounded-xl bg-zinc-800/30 border border-zinc-700/30 
                      transition-all duration-300 hover:border-zinc-600/50 hover:scale-105 
                      ${social.bg} ${social.color}
                    `}
                  >
                    <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-current transition-colors duration-300 " />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;