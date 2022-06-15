import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

import "./App.scss";
import { ProjectsData } from "./components/Projects/ProjectsData";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects slides={ProjectsData} />
      <Skills />
    </div>
  );
}

export default App;
