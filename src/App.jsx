import { useState } from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Projects from "./components/Projects";
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Expertise />
      <Footer />
    </>
  );
}

export default App
