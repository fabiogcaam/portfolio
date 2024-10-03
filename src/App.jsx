import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import CV from "./components/CV/CV"
import Bar from "./components/Bar/Bar"
import Modal from "./components/Modal/Modal"

function App() {

  return (
    <>
      <Navbar />
      <About />
      <CV />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
