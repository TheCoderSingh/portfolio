import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Publications from "./components/Publications/Publications";

import { ProjectsData } from "./components/Projects/ProjectsData";
import { PublicationsData } from "./components/Publications/PublicationsData";

import "./App.scss";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects slides={ProjectsData} />
      <Skills />
      <Publications publications={PublicationsData} />
      <Contact />
    </div>
  );
}

export default App;
