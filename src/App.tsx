import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tecnologies from "./components/Tecnologies";
import Experience from "./components/Experience";
import Contato from "./components/Contato";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
        </div>
          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <About />
            <Tecnologies />
            <Experience />
            <Contato />
          </div>
    </div>
  );
}

export default App;