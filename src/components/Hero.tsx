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
                Full Stack Developer
              </h2>

              <p className="mt-6 max-w-xl text-zinc-300 text-base lg:text-lg leading-relaxed font-light">
                {HERO_CONTENT}
              </p>
            </div>
          </div>

          {/* Right: imagem maior e alinhada */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start">
            <div className="group relative rounded-3xl p-3 bg-gradient-to-br from-zinc-900/30 to-transparent">
              <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-800 shadow-2xl">
                <img
                  src={hero}
                  alt="Foto de Jfdeev"
                  className="block w-64 h-80 lg:w-[420px] lg:h-[540px] object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
