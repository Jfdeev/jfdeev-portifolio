import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tecnologies from "./components/Tecnologies";
import Experience from "./components/Experience";
import Contato from "./components/Contato";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black">
          <div className="container mx-auto px-8 bg-zinc-900 border-l-1 border-r-1 border-neutral-700">
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