import Header from "./Cabecera";
import About from "./Perfil";
import Skills from "./Educacion";
import Contact from "./Experiencia";
import StackTecnologias from "./StackTecnologias";
import "./App.css";



export default function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Contact />
      <StackTecnologias />
    </div>
    
);
}