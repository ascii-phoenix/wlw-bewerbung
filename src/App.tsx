import Hero from "./components/Hero";
import HeroImage from "./components/HeroImage";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import FadeSection from "./components/FadeSection";
import "./App.css";

function App() {
  return (
    <div className="page">
      <FadeSection><Hero /></FadeSection>
      <FadeSection><HeroImage /></FadeSection>
      <FadeSection><About /></FadeSection>
      <Projects />
      <FadeSection><Skills /></FadeSection>
      <FadeSection><Contact /></FadeSection>
    </div>
  );
}

export default App;