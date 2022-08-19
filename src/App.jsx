// Created by Mark Hannem
// Date: August 12-19th 2022
// NOTE: I never had a picture of me cooking so I added Gordon Ramsey instead.

import "./App.css";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import PortfolioList from "./components/portfoliolist/PortfolioList";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <PortfolioList />
      <Contact />
    </div>
  );
}

export default App;
