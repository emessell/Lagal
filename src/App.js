import React from 'react';
import './App.css';
import SimpleSwiper from './Swiper';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="mainBox">
      <h1 className="title">Lagal</h1>
      <h2 className="title">Lara's gallery</h2>
      <Navigation/>
      <SimpleSwiper/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
