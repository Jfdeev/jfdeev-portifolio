import { EXPERIENCES } from "../constants";


const Experience = () => {
    return(
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-4xl text-center">Experiência</h2>
            <div className="flex flex-col items-center">
                {EXPERIENCES.map((experience, index) => (
                    <div className="w-full max-w-4xl rounded-2xl p-6 hover:bg-neutral-800 transition" key={index}>
                        <p className="text-sm text-neutral-400 mb-2 font-semibold">{experience.year}</p>
                        <h3 className="text-lg font-bold text-white"></h3>
                        <p className="mt-2 text-neutral-300">
                            {experience.role}
                        </p>
                        <p className="mt-2 text-neutral-400">
                            {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {experience.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 py-1 text-sm font-medium text-slate-300 bg-slate-800 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;