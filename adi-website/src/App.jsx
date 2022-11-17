import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Podcasts from "./components/podcasts/Podcasts";
import Books from "./components/books/Books";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Podcasts />
      <Books />
      <Contact />
    </div>
  );
};

export default App;
