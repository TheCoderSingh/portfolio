import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

import "./App.scss";
import { SliderData } from "./components/Projects/SliderData";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects slides={SliderData} />
    </div>
  );
}

export default App;
