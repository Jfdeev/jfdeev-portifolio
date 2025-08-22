import about from "../assets/jfdeevFrente.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl text-zinc-50 ">
                Sobre mim
            </h2>
            <div className="flex flex-col-reverse lg:flex-row items-start lg:gap-32 gap-8">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start">
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                        <div className="relative rounded-3xl p-2 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
                            <div className="rounded-2xl overflow-hidden ring-2 ring-zinc-500/50 shadow-2xl">
                                <img
                                    src={about}
                                    alt="Foto de Jfdeev"
                                    className="block w-64 h-80 lg:w-[420px] lg:h-[540px] object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-zinc-900/10 rounded-2xl"></div>
                            </div>
                        </div>

                        <div className="absolute top-4 left-4 right-4 h-20 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl opacity-60"></div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start text-zinc-300 text-base lg:text-lg leading-relaxed font-light">
                        <p className="mt-6 max-w-xl text-zinc-300 text-base lg:text-lg leading-relaxed font-light">{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;