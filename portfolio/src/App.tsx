import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
