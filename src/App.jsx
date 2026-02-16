import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import FadeIn from "./components/FadeIn"

function App() {
  return (
    <div style={{ background: "#050810", minHeight: "100vh" }}>
      {/* La Navbar reste fixe en haut */}
      <Navbar />
      
      {/* Pas besoin de Routes si on veut le détail en Modal (Pop-up) */}
      <main>
        <Hero />
        
        <FadeIn>
          <About />
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <Skills />
        </FadeIn>
        
        <FadeIn>
          <Projects /> 
          {/* Note: Le détail du projet s'ouvrira en Modal à l'intérieur de Projects.jsx */}
        </FadeIn>
        
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>

      {/* Footer simple optionnel */}
      <footer style={{ padding: "40px", textAlign: "center", color: "#333", fontSize: "0.8rem" }}>
        © 2026 Millena Ngaha • Designed with Passion
      </footer>
    </div>
  )
}

export default App