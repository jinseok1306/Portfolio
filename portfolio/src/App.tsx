import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
