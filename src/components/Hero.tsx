import hero from "../assets/jfdeev.jpg";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <section className="pt-16 pb-8 lg:mb-36">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-8">
          {/* Left: texto */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-start">
              <h1 className="mb-4 text-6xl lg:text-8xl font-extralight tracking-tight text-zinc-100 leading-tight">
                Jfdeev
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Software Developer
              </h2>
              <p className="mt-6 max-w-xl text-zinc-300 text-base lg:text-lg leading-relaxed font-light">
                {HERO_CONTENT}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
                  <div className="rounded-2xl overflow-hidden ring-2 ring-zinc-500/50 shadow-2xl">
                    <img
                      src={hero}
                      alt="Foto de Jfdeev"
                      className="block w-64 h-80 lg:w-[420px] lg:h-[540px] object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-zinc-900/10 rounded-2xl"></div>
                  </div>
              </div>
              
              <div className="absolute top-4 left-4 right-4 h-20 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;