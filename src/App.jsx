/**
 * Node modules
 */


import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import SkillCard from "./components/SkillCard";
import Work from "./components/Work";
import ProjectCard from "./components/ProjectCard";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
   return (
      <>
      <Header />
      <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Review />
          <Contact />
      </main>
      <Footer />
      </>
   )
}

export default App;