import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Header prend 100% de la hauteur de l'écran */}
      <Header />
      
      {/* Les autres sections commencent après le scroll */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;