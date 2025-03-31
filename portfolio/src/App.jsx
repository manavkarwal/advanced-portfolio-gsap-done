import React from 'react'
import Skills from './components/Skills'
import Home from './pages/Home'
import Projects from './components/Projects'
// import Page2 from './pages/Page2'
import resume from './assets/web assets/main resume.pdf';
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const App = () => {
  return (
    <>
      <Home />
     
      <h1 className=' font-[anzo1] text-8xl text-center  '> SKILLS</h1>
      <Skills />
      <h1 className=' font-[anzo1] text-8xl my-10 text-center  '> PROJECTS</h1>
      <Projects />
    </>
  )
}

export default App
