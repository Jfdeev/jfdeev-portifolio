import about from "../assets/jfdeevFrente.jpg";
import { ABOUT_TEXT, EXPERIENCES } from "../constants";
import { Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl text-zinc-50">
        Sobre mim
      </h2>
      
      {/* Seção About com Cards */}
      <div className="flex flex-col lg:flex-row items-start justify-center lg:gap-28 gap-8">
        {/* Coluna da Foto */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end items-start">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative rounded-3xl p-2 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
              <div className="rounded-2xl overflow-hidden ring-2 ring-zinc-500/50 shadow-2xl">
                <img
                  src={about}
                  alt="Foto de Jfdeev"
                  className="block object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-zinc-900/10 rounded-2xl"></div>
              </div>
            </div>
            <div className="absolute top-4 left-4 right-4 h-20 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl opacity-60"></div>
          </div>
        </div>

        {/* Coluna do Texto e Card de Experiências */}
        <div className="w-full lg:w-2/6 space-y-8">
          {/* Texto About */}
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl text-zinc-300 text-base lg:text-lg leading-relaxed font-light">{ABOUT_TEXT}</p>
          </div>

          {/* Card de Experiências */}
          <div className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-zinc-700/50 p-6 shadow-2xl">
            {/* Header do card */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center">
                <Briefcase 
                    className="text-zinc-400"
                />
              </div>
              <h4 className="text-xl font-medium text-zinc-200">Work</h4>
            </div>

            {/* Lista de experiências */}
            <div className="space-y-4 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
              {EXPERIENCES.map((experience, index) => (
                <div 
                  key={index}
                  className="group relative flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-800/50 transition-all duration-200"
                >
                  {/* Logo da empresa */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-xl flex items-center justify-center border border-zinc-600/50">
                      <span className="text-zinc-300 font-bold text-sm">
                        {experience.role.includes('Dti') ? 'D' : 
                         experience.role.includes('Tucupy') ? 'T' :
                         experience.role.includes('Prodepa') ? 'P' :
                         experience.role.includes('BlivUp') ? 'B' : '?'}
                      </span>
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-zinc-200 text-sm group-hover:text-white transition-colors">
                          {experience.role.split(' · ')[1] || 'Empresa'}
                        </h5>
                        <p className="text-zinc-400 text-xs">
                          {experience.role.split(' · ')[0]}
                        </p>
                      </div>
                      <span className="text-xs text-zinc-500 whitespace-nowrap ml-2">
                        {experience.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-6 pt-4 border-t border-zinc-700/50">
              <button className="w-full group inline-flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-zinc-300 text-sm font-medium hover:bg-zinc-700/50 hover:border-zinc-600 transition-all duration-300">
                <span>Download CV</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;