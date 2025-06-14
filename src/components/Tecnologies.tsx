import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi"; 


const Tecnologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Tecnologias</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className="text-7xl text-yellow-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript className="text-7xl text-blue-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-sky-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl text-white" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsFill className="text-7xl text-green-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavaFill className="text-7xl text-orange-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </div>
            </div>
        </div>
    )
}

export default Tecnologies;